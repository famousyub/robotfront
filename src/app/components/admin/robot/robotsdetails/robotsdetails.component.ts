import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Robot } from 'src/app/models/robot';
import { ExcutionerviceService } from 'src/app/services/excutionervice.service';
import { PlanificationerviceService } from 'src/app/services/planificationervice.service';
import { RobotserviceService } from 'src/app/services/robotservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-robotsdetails',
  templateUrl: './robotsdetails.component.html',
  styleUrls: ['./robotsdetails.component.css']
})
export class RobotsdetailsComponent implements OnInit {

  robot: Robot;

  excution : any ; 

  planification :any ;

  plnId : number = 0 ;

  excuId:number=0;

  robId = +this.route.snapshot.paramMap.get('id');


  choice(id:number){

     this.plnId  = id  ;
  }

  choiceexcu(id:number){
     this.excuId = id ;

  }

  currentUser: User;
  headers: HttpHeaders;


  


  constructor(private route: ActivatedRoute, private robotService: RobotserviceService,private planserv : PlanificationerviceService, 
    
    private excut : ExcutionerviceService,
    private router : Router,
    
    private http: HttpClient) {

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.headers = new HttpHeaders({
        authorization:'Bearer ' + this.currentUser.accessToken,
        "Content-Type":"application/json; charset=UTF-8"
      });
  
    }

  ngOnInit() {
    this.allexcution() ;
    this.getALLplanification();
    const id = +this.route.snapshot.paramMap.get('id');
    this.robotService.getRobotsInfo(id).subscribe((robot:Robot) => {
      this.robot = robot;
    });

  
  }

  getALLplanification(){ 
    this.excut.getAllexcuionall().subscribe(res =>{
      console.table(res);
        this.planification = res ;
    })

   
  }

  allexcution(){
    this.planserv.getAllrobots().subscribe(res=>{
      console.table(res);

      this.excution =res ;
    })
 }

 affectation(){

  console.log(this.robId);

    this.http.put(environment.URL_BACKEND +"/robotss/" +  this.robId + "/" + this.plnId +"/" + this.excuId,{},
    
    
     {headers:this.headers}).subscribe(res=>{


       console.table(res);

  

       this.router.navigate(['robots']);



    })
 }
}
