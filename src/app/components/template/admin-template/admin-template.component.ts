import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {User} from "../../../model/user";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {
  currentUser: User;


  curisAdmin : boolean =false ;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit() {

    if(Number(localStorage.getItem("admin")) == 1) {

      this.curisAdmin = true ;

    }
  }

  logOut(){

    localStorage.removeItem("currentUser");
    localStorage.removeItem("admin");
   
      this.router.navigate(['/login']);

      window.location.reload();
  
  }

}
