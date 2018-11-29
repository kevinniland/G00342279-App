// Imports used throughout the project e.g modules used for Angular materials
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatRadioModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatGridListModule } from '@angular/material';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUsersComponent } from './update-users/update-users.component';

// Used in routing. Sets the path name for which the components are located at
const appRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'edit/:id',
    component: UpdateComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'editAccount/:id',
    component: UpdateUsersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ImagesComponent,
    VideosComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent,
    UpdateUsersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
