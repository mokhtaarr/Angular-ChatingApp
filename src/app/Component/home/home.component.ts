import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 registerMode = false
 users : any


  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getUser()
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getUser(){
    this.http.get('https://localhost:44374/api/Users').subscribe({
      next: res => this.users = res,
      error: error => console.log(error),
      complete: () => console.log("request is complete")
    })
  }

  cancelRegisterMode(event : boolean){
    this.registerMode = event ;
  }

}
