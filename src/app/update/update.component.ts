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
  post : any = [];

  constructor(private router: Router, private route: ActivatedRoute, private ps:PostService) { 
    
  }

  ngOnInit() {
    this.ps.getPost(this.route.snapshot.params['id']).subscribe(data => {
      this.post = data;
    });
  }

  onEditPost(form: NgForm) {
    this.ps.updatePost(this.post._id, form.value.title, form.value.content, form.value.image, form.value.video).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
