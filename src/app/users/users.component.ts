import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private ls:LoginService) { 

  }

  // Gets users data
  ngOnInit() {
    this.ls.getUsersData().subscribe(data => {
      this.users = data;
    });
  }

  // Deletes a user from the database
  onDeleteUser(id: string) {
    console.log("User deleted");

     this.ls.deleteUser(id).subscribe(() => {
       // Refreshes page automatically on delete
       this.ngOnInit();
    });
  }
}
