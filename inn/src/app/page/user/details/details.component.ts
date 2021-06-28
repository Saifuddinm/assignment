import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.api';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: any;

  constructor(private service: UserService, private route: ActivatedRoute,private location: Location) {
    this.route.params.subscribe( params => this.user$ = params.id)
  }

  ngOnInit() {
    this.service.getDetails(this.user$).subscribe(
      (response : any) => this.user$ = response
    )
  }
  onBack() :void{
    this.location.back();
  }
}
