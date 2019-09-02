import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {User} from '../user';
import {AuthService} from '../services/auth.service';
import {ObsService} from '../services/obs.service';
import {of} from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm ={
    email:'',
    password:''
  }
   err_message = ''
  /*lists = [{'email':'123@123', 'password':'123'},{'email':'1234@1234', 'password':'1234'},{'email':'1234@123', 'password':'123456'}]*/

  constructor(private router: Router, private authservice:AuthService,private obsservice:ObsService, private route :ActivatedRoute, private http: HttpClient) { }


  ngOnInit() {


  }

  login () {

    this.http.post('http://localhost:4200/session', this.loginForm)
      .toPromise()
      .then((data:any) =>{
        window.localStorage.setItem('auth_token', data.token)
        this.router.navigate(['/'])
      })
      .catch(err=>{
          if(err.status ===401){
            this.err_message = "login failed"
          }
      })
    }

  }

  //save(event) {
    
   // this.authservice.login(this.email,this.password).subscribe(
     
   //   data=>{
    //      if (data.valid == true){
    //        alert("username:"+this.username);
    //        this.newuser = new User(data.username,data.birthdate,data.age,data.email)
     //       sessionStorage.setItem('currentUser',JSON.stringify(this.newuser));
//this.router.navigate(['/account']);
     //     }else{
           
    //        this.errormsg = "There is a problem with the credentials";
    //      }
    //  },
    //  error=>{
       
      //  this.errormsg = "There is a problem with the credentials";
     // }
  //  )


    //this.authservice.
    //let valid = false;
    //alert("username:"+this.emailusername);
    //for (let i = 0; i < 3; i++) {
  
      //if ((this.emailusername === this.lists[i].email) && (this.emailpassword === this.lists[i].password)){
      //  valid = true;
   
       // this.nav();
     // }
 
   // }
   // if ( valid === false){
     // alert("something wrong");
    //}
 // }

  //nav(){
      //}
    
//}
//}