import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Excution } from '../models/excution';

@Injectable({
  providedIn: 'root'
})
export class ExcutionerviceService {

  constructor(private http:HttpClient) { }


  roboturl = environment.URL_BACKEND ;

  createExcution(robot:Excution) {

    return  this.http.post(this.roboturl+"/excutions",robot);

  }

  getAllexcuion(){
     return this.http.get(this.roboturl+"/excutions");
  }


  
  getAllexcuionall(){
    return this.http.get(this.roboturl+"/excutions/all");
 }
  getEcutionInfo(id:number){

    return this.http.get(this.roboturl+"/excutions/" + id);

  }
  deleteExcution(id:number){
    return this.http.delete(this.roboturl+"/excutions/" + id);
  }
}
