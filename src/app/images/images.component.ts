import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  // Post array - Stores info regarding any post
  posts: any = [];

  constructor(private ps:PostService){}

  // When the page is initally loaded, data regarding any posts is retrieved from the server
  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
  });
  }
}
