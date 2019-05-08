import { Component, OnInit, Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

declare const $: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userDataSubscription: Subscription;
  userData: any;


  constructor(public oidcSecurityService: OidcSecurityService
  ) {
  }

  get givenName() {
    return this.userData.given_name;
  }

  ngOnInit() {
      $('.list_btn').on('click', function() {
          $('#plist').toggleClass('open');
      });
  }

}
