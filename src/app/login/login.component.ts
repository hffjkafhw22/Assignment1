import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
//import { ServicesComponent } from '../services/services.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})

  
};

import { NgForm } from '@angular/forms';



const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedin = false;
  username : string;
  account: {
    birthdate:string;
    age:number;
    email: string;
    password:string; 
  }

  emailusername = "";
  emailpassword = "";
  lists = [{'email':'123@123', 'password':'123'},{'email':'1234@1234', 'password':'1234'},{'email':'1234@123', 'password':'123456'}]

  constructor(private router: Router, private form :FormsModule) { }


  ngOnInit() {
    
  }

  itemClicked() {
    let valid = false;
    alert("username:"+this.emailusername);
    for (let i = 0; i < 3; i++) {
  
      if ((this.emailusername === this.lists[i].email) && (this.emailpassword === this.lists[i].password)){
        valid = true;
        //localStorage.setItem(“username”，“”)；

        this.nav();
      }
 
    }
    if ( valid === false){
      alert("something wrong");
    }
  }

  nav(){
         this.router.navigateByUrl('/account');
      }
    
}

