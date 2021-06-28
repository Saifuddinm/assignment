import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.api';
import { Observable, of, throwError, zip } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { concatAll, concatMap, flatMap, map, mergeMap } from 'rxjs/operators';
import { concat } from 'rxjs';


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '200ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('100ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users$!: any;

  dataSource: User[] = [];
 displayedColumns: string[] = ['name', 'username', 'email','posts'];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      (response: any) => this.dataSource = response
    );
  }
}
