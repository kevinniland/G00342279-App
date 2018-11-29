// Imports
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
  // Array to store post data
  post : any = [];

  constructor(private router: Router, private route: ActivatedRoute, private ps:PostService) { 
    
  }

  // When the page is initially loaded, information pertaining to the post that is to be updated will be retrieved from the server
  ngOnInit() {
    this.ps.getPost(this.route.snapshot.params['id']).subscribe(data => {
      this.post = data;
    });
  }

  // This function will update a post 
  onEditPost(form: NgForm) {
    /* if statement - if the from is valid i.e all fields are filled in, then the post will be updated. Once updated,
    the user will be directed back to the List html page. If form is not valid, the post will not be updated - the user will be 
    asked to fill in any missing information */
    if (form.valid) {
      this.ps.updatePost(this.post._id, form.value.title, form.value.content, form.value.image, form.value.video).subscribe(() => {
        this.router.navigate(['/list']);
      });
    } else {
      return;
    }
  }
}
