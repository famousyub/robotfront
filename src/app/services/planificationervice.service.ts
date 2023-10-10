import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Planification } from '../models/planification';

@Injectable({
  providedIn: 'root'
})
export class PlanificationerviceService {

  constructor(private http:HttpClient) { }


  roboturl = environment.URL_BACKEND ;

  createRobot(robot:Planification) {

    return  this.http.post(this.roboturl+"/planificationss",robot);

  }

  getAllrobots(){
     return this.http.get(this.roboturl+"/planificationss");
  }

  getRobotsInfo(id:number){

    return this.http.get(this.roboturl+"/planificationss/" + id);

  }
  deleteRobot(id:number){
    return this.http.delete(this.roboturl+"/planificationss/" + id);
  }
}
