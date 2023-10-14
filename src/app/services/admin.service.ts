import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user';

import {Transaction} from '../model/transaction';
import { Robots } from '../model/product';
import { Reguser } from '../components/admin/myuser/reguser';
import { Route, Router } from '@angular/router';

let API_URL = "http://localhost:8080/api/";
let API_URL2 = "http://localhost:8081/";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient,private rout : Router) {

    if(localStorage.getItem("currentUser")){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.headers = new HttpHeaders({
        authorization:'Bearer ' + this.currentUser.accessToken,
        "Content-Type":"application/json; charset=UTF-8"
      });

    }

    else  {
        console.log("should login");
        this.rout.navigate(['/login']);
    }
 
  }

  updateUser(user: Reguser,id:number): Observable<any> {
    return this.http.post(API_URL + "updateuser/"  +  id  , JSON.stringify(user),
  {headers: this.headers});
  }

  deleteUser(user: User): Observable<any> {
    return this.http.post(API_URL + "user-delete", JSON.stringify(user),
  {headers: this.headers});
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + "users",
  {headers: this.headers});
  }

  getCustomerReservations(customerId: number) {
    return this.http.get<any[]>(API_URL2 + 'api/customer/getCustomerReservations/' + customerId);
  }
  numberOfUsers(): Observable<any> {
    return this.http.get(API_URL + "user-number",
  {headers: this.headers});
  }

  //products
  createProduct(product: Robots): Observable<any> {
    return this.http.post(API_URL + "product-create", JSON.stringify(product),
  {headers: this.headers});
  }

  updateProduct(product: Robots): Observable<any> {
    return this.http.put(API_URL + "product-update", JSON.stringify(product),
  {headers: this.headers});
  }

  deleteProduct(product: Robots): Observable<any> {
    return this.http.post(API_URL + "product-delete", JSON.stringify(product),
  {headers: this.headers});
  }

  findAllProducts(): Observable<any> {
    return this.http.get(API_URL + "product-all",
  {headers: this.headers});
  }

  numberOfProducts(): Observable<any> {
    return this.http.get(API_URL + "product-number",
  {headers: this.headers});
  }

  //transactions
  findAllTransactions(): Observable<any> {
    return this.http.get(API_URL + "transaction-all",
   {headers: this.headers});
  }

  numberOfTransactions(): Observable<any> {
    return this.http.get(API_URL + "transaction-number",
  {headers: this.headers});
  }
}
