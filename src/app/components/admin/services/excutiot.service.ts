import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Excutiont } from '../excutiont';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/excutionts';
@Injectable({
  providedIn: 'root'
})
export class ExcutiotService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Excutiont[]> {
    return this.http.get<Excutiont[]>(baseUrl);
  }

  get(id: any): Observable<Excutiont> {
    return this.http.get<Excutiont>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl+"/exc");
  }

  findByTitle(title: any): Observable<Excutiont[]> {
    return this.http.get<Excutiont[]>(`${baseUrl}?title=${title}`);
  }
}
