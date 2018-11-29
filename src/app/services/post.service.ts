import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private http: HttpClient) { }
  
  private posts: Post[] = [];

  // Adds a post
  addPost(title: string, content: string, image: string, video: string): Observable<any> {
    const post: Post = { title: title, content: content, image: image, video: video };
    
    return this.http.post("http://localhost:8081/api/posts", post);
  }

  // Gets a post based on it's id
  getPost(id: string): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/" + id);
  }

  // Gets all post data
  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts");
  }

  // Deletes a post
  deletePost(id: string): Observable<any>{
    return this.http.delete("http://localhost:8081/api/posts/" + id);
  }

  // Updates a post
  updatePost(id: string, title: string, content: string, image: string, video: string): Observable<any> {
    const post: Post = { title: title, content: content, image: image, video: video };
    
    return this.http.put("http://localhost:8081/api/posts/" + id, post);
  }
}
