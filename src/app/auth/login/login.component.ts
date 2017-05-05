import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) { }


  onLogin(data: NgForm) {
    const email: string = data.value.email;
    const password: string = data.value.password;
    this.auth.loginUser(email, password);
    data.reset();

  }
}
