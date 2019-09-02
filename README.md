# Assignment1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Describe the organisation of your Git repository and how you used it during the development of your solution 

In my git repository structure,  it has the two main parts, one is the folder part, in this folder part , such as e2e, server and src folder which has the main coding contents, e2e is the initial commit, server provides the server services for the whole website process and src is the main body of the website, such as the homepage, login page and any other main pages; the other part is document and json file, such as README.md to record the git development process into the document, and json files to record the package, angular details in the git repository.
I usually updated my latest parts through the github to save my development and each commit means I completed one parts in the assignment in one time.



## Description of data structures used in both the client and server sides to represent the various entities, e.g.: users, groups, channels, etc. 

In my data structure in both the client and server sides, for the client, it would own the register to collect the user’s email, username, passwords, age into the local storage.  For the users, groups, channels are stored into the localsotrage and data is stored into the JSON. By using the this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));  

import { Component, OnInit } from '@angular/core';  import { User } from '../user'; are methods to import the module into the content we would need to insert module into the parts by every time because it would be like the ticket, if you not have the ticked to pass, you would not be able to pass.


<li><a (click)="logout($event)" href="#">Logout</a> </li>

I created user.json data into the data folder and in this user.json which could provide the user’s detail and information.  {
      "id" : 1,
      "age": 23,
      "name": "Brd Raey",
      "gender": "male",
      "company": "NION",
      "email": "123@com"
    },




## Angular architecture: components, services, models, routes

Angular provides the root into the website processing, and users need to log in by their account to get validate access into the account page, when the server receives the responds from the user, the server would check and decides whether to return back to the user’s information.
Server is used the “ http://localhost:4200/” as the url 
 path: 'appcomponent',
         component: AppComponent
       

        path: 'account', 
         component: AccountComponent 
       
         path: 'login',
         component: LoginComponent
      
          path: 'register',
          component: RegisterComponent
and account, login and register are appcompnents are associated with the route and route activates the component associated with route state.

I also use the events observable by  logout($event) 
<li><a (click)="logout($event)" href="#">Logout</a> </li>

Here is the routes part in the component to set up the route.
const routes: Routes = [
  {path:'login/:id', component:LoginComponent},
  {path:'account', component:AccountComponent},
  {path:'register', component:RegisterComponent},
];


Obeser service provides the user’s details and check the passwords into the account page.
  users:User[] = [{'email':'123@com','password':'123','username':'Brd Raey','birthdate':'123','age':5,'valid':false},
        {'email':'1234@1234','password':'123','username':'Jodi','birthdate':'123','age':15,'valid':false},
        {'email':'1234@123','password':'123456','username':'Sarah','birthdate':'123','age':25,'valid':false}]

Angular is made by the HTML, css, server, ts file to server the based part and used the angular parts (router, httpclient,) to link each part in the project process.
 <div class=" button">
         <button >.....</button>
         <image src="....."></image>
   </div>

<div class="alert alert-danger" *ngIf="err_message">{{err_ormsg}}</div>

[(ngModel)]= "password"



##  Node server architecture: modules, functions, files, global variables. 

In the modules structure, it has the different modules and I most used the route, httpclient, 
BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.

"typeRoots": [
      "node_modules/@types"

In the function part , I most used the module.exports = function(req, res) {
    var u = req.body.username;
    var p = req.body.password;
    c = u + p;
    console.log(c);

In the server file which has the data folder, routes folder and server.js. Data folder is the folder to contain the super user, group administration, group assign these users folder and routes is used the route to link to the each part.


## A description of how you divided the responsibilities between client and server (you are encouraged to have the server provide a REST API which returns JSON in addition to a static directory) 
Users insert their passwords to pass the login page, the login is the form to receive the input data, when login receives the data and transfers to the server to process, and it would require to use the JSON to convert the string data into the JSON type. Server is the Express framework (or whatever) to implement MVC architecture.  All of your angular services to /api/XXX routes that serve a proper hypermedia API.



## A list of routes, parameters, return values, and purpose in the sever side 
In the routes part, it would provide the navigation in the process, it is particular for the user login the account and transfers to the account page, or logoff account and navigate to the login page or homepage. 
I often add the return value into the codes, such as 
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

If user logs success and it would redirect to the home page if not log success, it would informed by the message.

   public getUsers(): any {
    const userObservable = new Observable(observer => {
           setTimeout(() => {
              observer.next(this.users);
           }, 1000);
    });

    return userObservable;
}

For the user’s part, its username is the type of string, birthdate is string, age is the number and email is string. These different types are the parameter name to server into the project. 

username : string;
    password : string;
    birthdate:string;
    age:number;
    email:string;
    valid:boolean;

the purpose of server-side is to attract users to login the chat room webpage to chat with each other and user could register and login by their password and chat with different people in the different channel.

## Describe the details of the interaction between client and server by indicating how the files and global vars in server side will be changed and how the display of each angular component page will be updated.

In the client design, I added each part in the client such as login, account, register, chat channel, these different parts would influence the website structure. In the server part, it would check the request, if one user login in the account, the server would return back with different group, channel to the account page.
