import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NgForm, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  user: any = [];
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router, private route: ActivatedRoute, private ls:LoginService) { 

  }

  ngOnInit() {
    this.ls.getUser(this.route.snapshot.params['id']).subscribe(data => {
      this.user = data;
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onEditUser(form: NgForm) {
    this.ls.updateUser(this.user._id, form.value.username, form.value.password, form.value.firstName, form.value.lastName, form.value.email,
      form.value.profileImage).subscribe(() => {
        this.router.navigate(['/users']);
    });
  }
}
