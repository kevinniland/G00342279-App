import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /* implements OnDestroy */{
  title = 'G00342279-app';

  get user(): any {
    return localStorage.getItem("username");
  }

  // get profileImage(): any {
  //   return localStorage.getItem("profileImage");
  // }
}
