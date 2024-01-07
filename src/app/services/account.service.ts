import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http : HttpClient) { }

  login(model : any){
    return this.http.post<User>(environment.baseUrl + 'Account/Login',model).pipe(
      map((res:User) =>{
        const user = res ;
        if(user){
          localStorage.setItem("user", JSON.stringify(user))
          this.currentUserSource.next(user);
        }
      })
    );
    
  }

  register(model:any){
    return this.http.post<User>(environment.baseUrl + 'Account/register',model).pipe(
      map((user)=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user)
        }
        return user ;
      })
    );
  }

  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }


  logOut(){
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }
}
