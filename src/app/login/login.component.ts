import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: LoginService) { }

  // Array to store information pertaining to users
  users = [];

  // Login function
  login(form: NgForm) {
    // If the login form is valid, data containing information about the user is retrieved from the server
    if (form.valid) {
      this.service.getUsersData().subscribe ( data => {
          this.users = data;

          // for loop to iterate through all users
          for (var i = 0; i < this.users.length; i++) {
            /* if the entered username and password equal a username and password stored in the users array, the user is logged in. localstorage
            is used to achieve this. The username and profileImage is set. If username or password is invalid, the user will not be 
            logged in */
            if (form.value.username == this.users[i].username && form.value.password == this.users[i].password) {
              localStorage.setItem ("username", this.users[i].username);
              localStorage.setItem ("profileImage", this.users[i].profileImage);
            }
          }
        }
      )
    } else {
      return;
    }
  }

  ngOnInit() {

  }
}
