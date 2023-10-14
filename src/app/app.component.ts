import { Component} from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './model/user';
import {Role} from './model/role';
import {Router, RoutesRecognized} from '@angular/router';
import { AdminuserService } from './components/admin/myuser/adminuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'client-product-management';
  currentUser: User;
  admin : boolean = false;
  userlogin : boolean =true ;
  isAdminPanel: boolean = false;
  d_user  :any ;
  id:number ;
  constructor(private userService: UserService, private router: Router, private userchekc :AdminuserService ){
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    
      this.userlogin = true ;
      this.userChanged();
    });

    this.checkRole();
  }


  checkRole(){

     this.userchekc.checkAdmin().subscribe(res=>{

       console.table(res);
       this.d_user = res ;
      this.id =  this.d_user.id ;
        localStorage.setItem("user_id",this.id.toString());

       this.admin = this.d_user.iadmin;
       this.admin == true ?     localStorage.setItem("admin" , JSON.stringify(1))  :   localStorage.setItem("admin" ,JSON.stringify(0));
       
     

       console.table(this.admin);


     })
  }

  userChanged(){
    if(!this.currentUser || Role.ADMIN !== this.currentUser.role){
      this.isAdminPanel = false;
      return;
    }
    this.router.events.subscribe((evt) => {
      if(evt instanceof RoutesRecognized){
        var roles = evt.state.root.firstChild.data.roles;
        if(roles && roles.indexOf(this.currentUser.role)!== -1){
          this.isAdminPanel = true;
        }
      }
    });
  }
}
