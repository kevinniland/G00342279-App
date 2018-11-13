import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private http: HttpClient) { }
  
  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts");
  }

  private posts: Post[] = [];

  getPost(id: string): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/" + id);
  }

  deletePost(id: string):Observable<any>{
    return this.http.delete("http://localhost:8081/api/posts/" + id);
  }

  updatePost(id: string, title: string, content: string, image: string, video: string): Observable<any> {
    const post: Post = { title: title, content: content, image: image, video: video };
    
    return this.http.put("http://localhost:8081/api/posts/" + id, post);
  }

  addPost(title: string, content: string, image: string, video: string): Observable<any> {
    const post: Post = { title: title, content: content, image: image, video: video };
    return this.http.post("http://localhost:8081/api/posts", post);
  }
}
