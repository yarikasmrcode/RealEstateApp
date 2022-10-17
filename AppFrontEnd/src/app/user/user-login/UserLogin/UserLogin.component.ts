import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-UserLogin',
  templateUrl: './UserLogin.component.html',
  styleUrls: ['./UserLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router : Router, private alertify : AlertifyService, private auth : AuthService) { }

  ngOnInit() {
  }

  onLogin(loginForm : NgForm){
    const token = this.auth.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName);
      this.alertify.success("Logged successfully");
      this.router.navigate(['/']);
    }else{
      this.alertify.error("Logging failed. The password or username may be incorrect");
    }
  }
}

