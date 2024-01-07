import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ChatingApp-Client';

  constructor(private accountservice : AccountService){}

  ngOnInit(): void {
   this.setCurrentUser();
  }

 

  setCurrentUser(){
    const currentUser = localStorage.getItem("user");
    if(currentUser){
      const user : User = JSON.parse(currentUser);
      this.accountservice.setCurrentUser(user);
    }
  }
}
