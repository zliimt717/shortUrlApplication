import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlsLink: string;
  isAuthenticated =false;

  constructor(
    private http: HttpClient,
  ) { 
    this.urlsLink='http://localhost:8080/test/'
  }

  public login(user:User){
    this.isAuthenticated=true;
    return this.http.post<any>(this.urlsLink+"login",user);
  }

  
}
