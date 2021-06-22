import { Component, Input, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { PostService } from '../services/post.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts!: any;
  picurl!: any;
  constructor(private service:PostService) { 
    
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        //console.log(this.posts);
      });
      //fetch pics related to post
      //i am fetching only 1
      /*this.service.getPics()
      .subscribe(response => {
        this.picurl = response;
        console.log(this.picurl);
      });*/
  }
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        //post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        //console.log(response.json());
      });
  }

  updatePost(post: any) {
    this.service.updatePost(post)
      .subscribe(response => {
        //console.log(response.json());
      });
  }

  deletePost(post: any[]) {
    this.service.deletePost('1')
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
