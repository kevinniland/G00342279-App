import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit(){
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }

   onDelete(id: string){
     console.log("Deleting item")
     this.ps.deletePost(id).subscribe(() => {
       // Refreshes page automatically on delete
       this.ngOnInit();
     });
   }
}
