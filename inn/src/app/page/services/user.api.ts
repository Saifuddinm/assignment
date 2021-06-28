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

  getDetails(userId: number) {
    return this.http.get(this.urlUsers +'/'+ userId);
  }
  
  getUser(userId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  }
  getUserPosts(userId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
  getUserAlbums(userId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  }
  getPhotos(albumId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
}
