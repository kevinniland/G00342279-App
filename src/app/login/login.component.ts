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

  users = [];

  login(form: NgForm) {
    this.service.getUsersData().subscribe ( data => {
        this.users = data;

        for (var i = 0; i < this.users.length; i++) {
          if (form.value.username == this.users[i].username && form.value.password == this.users[i].password) {
            localStorage.setItem ("username", this.users[i].username);
          }
        }
      }
    )
  }

  ngOnInit() {

  }
}
