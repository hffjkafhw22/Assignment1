import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email:string;
  password:string;
  constructor(private http:HttpClient) { }


  login(email:string,password:string){
    return this.http.post<User>('/api/auth', { email: email, password: password });
  }
}
