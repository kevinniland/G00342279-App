import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-post-edit',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private ps:PostService) { 
    
  }
  
  post : any = [];

  ngOnInit() {
    console.log(this.route.snapshot.params['_id']);
    
    this.ps.getPost(this.route.snapshot.params['_id']).subscribe(data => {
      this.post = data;
      console.log(this.post);
      console.log("hello");
      
    })
  }

  onEditPost(form: NgForm) {
    this.ps.updatePost(this.post[0]._id, form.value.title, form.value.content, form.value.image, form.value.video).subscribe();
    this.router.navigate(['/list']);
  }
}
