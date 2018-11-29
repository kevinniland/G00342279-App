import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /* implements OnDestroy */{
  title = 'G00342279-app';

  // Gets the user's username from localstorage and displays in the top right corner
  get user(): any {
    return localStorage.getItem("username");
  }

  // Gets the user's profile image and displays it in the top right corner, alongside the username
  get profileImage(): any {
    return localStorage.getItem("profileImage");
  }

  // Gets the background image url
  getUrl()  {
    return "url('https://wallpapercave.com/wp/0l0kzYB.jpg')";
  }
}
