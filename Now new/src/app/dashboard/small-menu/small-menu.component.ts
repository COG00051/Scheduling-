import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

declare const $: any;

@Component({
  selector: 'app-small-menu',
  templateUrl: './small-menu.component.html',
  styleUrls: ['./small-menu.component.css']
})
export class SmallMenuComponent implements OnInit {
  userDataSubscription: Subscription;
  userData: any;


  constructor(public oidcSecurityService: OidcSecurityService
  ) {
  }

  get givenName() {
    return this.userData.given_name;
  }

  ngOnInit() {
      $(window).on('scroll', function() {
          $('.card .sparkline').each(function() {
              const imagePos = $(this).offset().top;

              const topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow + 400) {
                  $(this).addClass('pullUp');
              }
          });
      });
      $('.sparkbar').sparkline('html', { type: 'bar' });
      $('.sparkline').each(function() {
          const $this = $(this);
          $this.sparkline('html', $this.data());
      });
      $('.cwidget-scroll').slimscroll({
          height: '306px',
          color: 'rgba(0,0,0,0.4)',
          size: '2px',
          alwaysVisible: false,
          borderRadius: '3px',
          railBorderRadius: '2px'
      });
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
