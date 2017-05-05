import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(data: NgForm) {
    console.log(data)

     const email = data.value.email;
     const password = data.value.password;
     this.auth.loginUser(email, password);
     data.reset();

  }

}
