import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  loggedinUser : string;

  constructor(private alertify : AlertifyService) { }

  ngOnInit() {
  }

  loggedin(){
    this.loggedinUser = localStorage.getItem('token') as string;
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success("Logged out successfully");
  }
}
