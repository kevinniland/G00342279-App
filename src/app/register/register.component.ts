import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private service: LoginService) { }

  onAddUser(form: NgForm) {
    this.service.addUser(form.value.username, form.value.password, form.value.firstName, form.value.lastName).subscribe();

    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {

  }
}
