import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PostDetailsComponent implements OnInit {
  posts: any = [];

  constructor(private ps:PostService) {
    
  }

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }

   // Deletes a post and refreshes the page 
   onDelete(id: string) {
     console.log("Post deleted");

     this.ps.deletePost(id).subscribe(() => {
       // Refreshes page automatically on delete
       this.ngOnInit();
     });
   }
}