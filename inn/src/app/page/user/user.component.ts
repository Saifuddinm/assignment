import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../services/user.api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users!: any;
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  getUsers(){
    this.service.getUsers()
    .subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

}
