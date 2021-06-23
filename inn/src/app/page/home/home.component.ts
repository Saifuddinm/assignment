import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { catchError, map } from 'rxjs/operators';
import { PostService } from '../services/post.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts!: any;
  photos!: any;
  constructor(private service:PostService) { 
    
  }

  ngOnInit() {
    //if only posts are needed
    //this.getPosts();

    //getting image for perticular source
    this.getPostWithImages();
  }
  //this is bound in img source directly
  getImageUrlById(id: any){
    //var defaultUrl="../../../assets/images/card.jpeg";
    //return defaultUrl;
    var result=this.photos.find((item: { id: any; })=>item.id===id);
    return result.thumbnailUrl;
  }


  getPostWithImages(){
    forkJoin([this.service.getPosts(),this.service.getPhotos()]).subscribe(result=>{
      this.posts=result[0];
      this.photos=result[1];
    })
  }

  getPosts(){
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }

  getImages(){
    this.service.getPhotos()
    .subscribe(response => {
      this.photos = response;
      console.log(this.photos);
    });
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
