import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reguser } from './reguser';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {

  constructor(private http: HttpClient) { 
  if(localStorage.getItem("currentUser")){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.headers = new HttpHeaders({
        authorization:'Bearer ' + this.currentUser.accessToken,
        "Content-Type":"application/json; charset=UTF-8"
      });
    }
  }

    url_admino = environment.URL_BACKEND;


    currentUser: User;
    headers: HttpHeaders;
  
   
    checkAdmin(){

       return this.http.get(this.url_admino +"/check/me" ,  {
         headers:this.headers
       })
    }
      
    mrobots(id:number){
        //  mrobots
        return this.http.get(this.url_admino +"/mrobots/" + id,);
    }

     getUsers()
    {


      return this.http.get(this.url_admino +"/users",);
    }
    
     addUsers(user : Reguser){

      return this.http.post(this.url_admino +"/addUser" ,  user ,{
        headers : this.headers
      } )
     }

}
