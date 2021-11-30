import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  user: User;
  access_token:string="";
  isAuthenticated: boolean = false;
  
  constructor(
    private loginService: LoginService,
    private router:Router
  ) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.login(this.user).toPromise().then(
      (data:any)=>{
       /*  this.access_token=data.accessToken; */
        this.router.navigate(['/urls']);
        
      });
  }
  
  
  logout(){
    
    this.router.navigate(['']);
    this.isAuthenticated=false;
  }

}
