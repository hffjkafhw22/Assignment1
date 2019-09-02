import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';

  constructor(private http: HttpClient,
    private router: Router
    ) { }


  ngOnInit(){
    
    
  }

  logout (e) {
    e.preventDefault()
    this.http.delete('http://localhost:4200/')
      .toPromise()
      .then(data => {
          window.localStorage.removeItem('auth_token')
          this.router.navigate(['/login'])
        })

      .catch(err => {
        window.alert('log failed')
      })
    
  }


}


