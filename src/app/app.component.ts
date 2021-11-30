import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='login-page-demo';
  constructor(
    public login:LoginComponent,
    public loginSerivce: LoginService
  ){}


  logout(){
    this.login.logout();
  }
}
