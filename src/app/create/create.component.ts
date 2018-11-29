import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

// Take in the PostService in the constructor
export class CreateComponent implements OnInit {
  constructor(private service: PostService) { 

  }

  // This function will add a post
  onAddPost(form: NgForm) {
    /* if statement - if the form is valid, a post will be added. It will be sent up to the server via the PostService. It sends up the title,
    content, and the image. Once a post has been added, the form will be reset. This allows the user to keep entering posts. If any field does 
    not contain text, an error message will be displayed. The user will be asked to fill in any missing inputs */
    if (form.valid) {
      this.service.addPost(form.value.title, form.value.content, form.value.image, form.value.video).subscribe();
      
      console.log(form.value);
      form.resetForm();
    } else {
      return;
    }
  }

  ngOnInit() {

  }
}
