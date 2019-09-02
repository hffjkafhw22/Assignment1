import { Injectable } from '@angular/core';
import {User} from '../user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ObsService {
  users:User[] = [{'email':'123@com','password':'123','username':'Brd Raey','birthdate':'123','age':5,'valid':false},
        {'email':'1234@1234','password':'123','username':'Jodi','birthdate':'123','age':15,'valid':false},
        {'email':'1234@123','password':'123456','username':'Sarah','birthdate':'123','age':25,'valid':false}]
  
  
  constructor() {
   }
   public getUsers(): any {
    const userObservable = new Observable(observer => {
           setTimeout(() => {
              observer.next(this.users);
           }, 1000);
    });

    return userObservable;
}
  
}
