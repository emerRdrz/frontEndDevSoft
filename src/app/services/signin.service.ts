import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private URL = 'http://localhost:8081/apiRest/auth/'

  constructor(private http: HttpClient,
     private router: Router,
    private jwtHelper: JwtHelperService) { }

  signup(user: any){
    return this.http.post<any>(this.URL + 'singup', user);
  }

  signin(user: any){
    return this.http.post<any>(this.URL + 'signin', user);
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    
    if(this.jwtHelper.isTokenExpired(token!) ||!localStorage.getItem('token')){
      return false;
    }
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getIdUser(){
    return localStorage.getItem('user');
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/signin'])
  }
}
