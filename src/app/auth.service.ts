import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin } from './user-login';
import { HttpClient } from '@angular/common/http';
import { UserForm } from './user-form';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  private baseUrl:string = "http://localhost:9040";

  constructor(private httpClient:HttpClient,private router:Router) { }
  
  login(userLogin:UserLogin):Observable<Response>
  {
    return this.httpClient.post<Response>(`${this.baseUrl}/login`,userLogin);
  }

  save(userForm:UserForm):Observable<Response>
  {
    console.log(userForm);
    return this.httpClient.post<Response>(`${this.baseUrl}/save`,userForm);
  }

  updatePassword(userForm:UserForm):Observable<Response>
  {
    console.log(userForm);
    return this.httpClient.post<Response>(`${this.baseUrl}/forgotPassword`,userForm);
  }
}