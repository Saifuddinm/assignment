import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsers = 'https://jsonplaceholder.typicode.com/users';
  
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.urlUsers);
  }
  
  getUser(userId: string) {
    return this.http.get(this.urlUsers  + '/' + userId);
  }
}
