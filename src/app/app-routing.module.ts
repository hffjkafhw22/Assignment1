import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';
import {RegisterComponent} from './register/register.component';




const routes: Routes = [
  {path:'login/:id', component:LoginComponent},
  {path:'account', component:AccountComponent},
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
