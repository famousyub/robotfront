import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Robot } from '../models/robot';
import { User } from '../model/user';
import { Robots } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class RobotserviceService {

  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.accessToken,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  roboturl = environment.URL_BACKEND ;

  createRobot(robot:Robots) {

    return  this.http.post(this.roboturl+"/robotss",robot,{
      headers: this.headers
    });

  }

  affectation(robotTd:number, planID:number, ExcutID:number){

     return this.http.put(this.roboturl,{});
  }

  createRobot2(robot:Robot) {

    return  this.http.post(this.roboturl+"/robotss",robot,{
      headers: this.headers
    });

  }

  getAllrobots(){
     return this.http.get(this.roboturl+"/robotss");
  }

  getRobotsInfo(id:number){

    return this.http.get(this.roboturl+"/robotss/" + id,{
      headers: this.headers
    });

  }
  deleteRobot(id:number){
    return this.http.delete(this.roboturl+"/robotss/" + id,{
      headers: this.headers
    });
  }

}
