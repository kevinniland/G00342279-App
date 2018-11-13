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
  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
  });
  }
}
