// Imports
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts: any = [];

  constructor(private ps:PostService) {
    
  }

  // On intial load, post data is retrieved
  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }

   // Deletes a post (using the post's id) and refreshes the page 
   onDelete(id: string) {
     console.log("Post deleted");

     this.ps.deletePost(id).subscribe(() => {
       // Refreshes page automatically on delete
       this.ngOnInit();
     });
   }
}
