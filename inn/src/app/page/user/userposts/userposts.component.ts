import { identifierModuleUrl, visitAll } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, from, interval, merge, of, pipe } from 'rxjs';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../../services/user.api';
import { PostService } from '../../services/post.api';
import { Location } from '@angular/common';

@Component({
  selector: 'user-posts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.scss']
})
export class UserPostsComponent implements OnInit {
  user: any;
  userid: any;
  posts!: any;
  albums!: any;
  photos!: any;

  constructor(private userService:UserService,private postService:PostService,private route:ActivatedRoute,private location: Location) { 
    this.route.params.subscribe( params => this.userid = params.id)
  }

  ngOnInit() {
    this.getUserPostWithAlbums(this.userid);
  }
  //this is bound in img source directly
  getImageUrlByAlbumId(id: number){
    this.userService.getPhotos(id)
    .subscribe(response => {
      this.photos = response;
      //console.log(this.photos);
    });
  }

  getUserPostWithAlbums(userid: number){
    this.userService.getUser(userid).pipe(map((users:any)=>{
      //console.log(users[0]);
        this.user=users[0];
        return users.name;
    }),
    mergeMap(user=>{
        return forkJoin([this.userService.getUserPosts(userid),this.userService.getUserAlbums(userid)]);
    })
    ).subscribe((result: any[])=>{
      //1 post and 1 album
      //in next update, we can add a dropdownlist for albums
      //based on dropdownlist selection, We will load photos 
       this.posts=result[0][0];
       this.albums=result[1][0];      
       this.getImageUrlByAlbumId(this.albums.id);
      });
  }
  updatePost(post: any) {
    this.postService.updatePost(post)
      .subscribe(response => {
        //console.log(response.json());
      });
  }
  deletePost(post: any[]) {
    this.postService.deletePost(this.userid)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
  onBack(){
    this.location.back();
  }
}


