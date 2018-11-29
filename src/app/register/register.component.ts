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

  // Used to validate user email
  email = new FormControl('', [Validators.required, Validators.email]);

  // Used to display an error message if entered email contains an error
  getErrorMessage() {
    // If no email is entered, display first message. If entered email is not in correct format, display second message
    return this.email.hasError('required') ? 'You must enter an e-mail' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // Adds a user
  onAddUser(form: NgForm) {
    // if form is valid, user will be added
    if (form.valid) {
      /* Uses the UserService to send user data up to the server. Once added, the form will be reset. If not valid, user will be asked
      to fill out the form correctly */
      this.service.addUser(form.value.username, form.value.password, form.value.email, form.value.firstName, form.value.lastName, 
        form.value.profileImage).subscribe();

      console.log(form.value);
      form.resetForm();
    } else {
      return;
    }
  }

  ngOnInit() {

  }
}
