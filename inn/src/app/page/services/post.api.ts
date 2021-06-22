import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  private urlPics = 'https://jsonplaceholder.typicode.com/photos/1';
  
  
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  /*getPics() {
    return this.http.get(this.urlPics);
  }*/

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
