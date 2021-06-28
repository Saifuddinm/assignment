import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  private urlImages = 'https://jsonplaceholder.typicode.com/photos';
  
  
  constructor(private http: HttpClient) { }
 
  getPosts() {
    return this.http.get(this.url);
  }

  getPhotos() {
    return this.http.get(this.urlImages);
  }
  
  createPost(post: { title: string; }) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post: { id: string; }){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
  }

  deletePost(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
}
