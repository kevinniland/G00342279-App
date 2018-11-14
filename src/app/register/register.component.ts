import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private service: LoginService) { }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an e-mail' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onAddUser(form: NgForm) {
    this.service.addUser(form.value.username, form.value.password, form.value.email, form.value.firstName, form.value.lastName, 
      form.value.profileImage).subscribe();

    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {

  }
}
