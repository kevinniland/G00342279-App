import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { 

  }

  // Gets user's data
  getUsersData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/users");
  }

  // Adds a user
  addUser(username: string, password: string, firstName: string, lastName: string): Observable<any> {
    const user: User = { username: username, password: password, firstName: firstName, lastName: lastName };
    return this.http.post("http://localhost:8081/api/users", user);
  }

  // Deletes a user
  deleteUser(id: string):Observable<any>{
    return this.http.delete("http://localhost:8081/api/users/" + id);
  }
}
