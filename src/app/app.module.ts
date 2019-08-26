import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
         path: 'appcomponent',
         component: AppComponent
        },

        { path: 'account', 
         component: AccountComponent 
        },
        {
         path: 'login',
         component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        }    
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }