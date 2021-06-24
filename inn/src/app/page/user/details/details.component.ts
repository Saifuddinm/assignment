import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: any;

  constructor(private service: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id)
  }

  ngOnInit() {
    this.service.getUser(this.user$).subscribe(
      (response : any) => this.user$ = response
    )
  }

}
