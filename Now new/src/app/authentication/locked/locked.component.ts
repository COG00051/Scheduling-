import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.css']
})
export class LockedComponent implements OnInit {
  year = (new Date()).getFullYear();
  userDataSubscription: Subscription;
  userData: any;


  constructor(public oidcSecurityService: OidcSecurityService
  ) {
  }

  get givenName() {
    return this.userData.given_name;
  }


  ngOnInit() {
  }

}
