import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { OidcSecurityService } from 'angular-auth-oidc-client';
import { NavigationStart, Router } from '@angular/router';

import { AuthService } from './core/auth.service';
import { AccountService } from './core/account.service';
import { UserProfile } from './model/user-profile';
import { ProfileViewModelService } from './core/profile-view-model.service';

declare const $: any;
declare const jquery: any;
declare const screenfull: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  previousUrl: string;
  userProfile: UserProfile;

  //isAuthorizedSubscription: Subscription | undefined;
  //isAuthorized = false;

  //userDataSubscription: Subscription | undefined;
  //userData: any;

  profileData;

  constructor(
    public oidcSecurityService: OidcSecurityService,
    private renderer: Renderer2,
    private router: Router,
    private _authService: AuthService,
    private ProfileViewModelService: ProfileViewModelService) {

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrl = event.url.split('/');
          let currentUrlSlug = currentUrl[currentUrl.length - 1];
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });

    // if (this.oidcSecurityService.moduleSetup) {
    //   this.doCallbackLogicIfRequired();
    // } else {
    //   this.oidcSecurityService.onModuleSetup.subscribe(() => {
    //     this.doCallbackLogicIfRequired();
    //   });
    // }
  }


  ngOnInit() {


    // this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
    //   (isAuthorized: boolean) => {
    //     this.isAuthorized = isAuthorized;
    //   });

    // this.userDataSubscription = this.oidcSecurityService.getUserData().subscribe((userData: any) => {
    //   this.userData = userData;
    // });

    this.ProfileViewModelService.getProfileDetails().subscribe(data => {
      console.log(data);
      this.profileData = data;
    })

    if (window.location.href.indexOf('?postLogout=true') > 0) {
       this._authService.signoutRedirectCallback().then(() => {
         let url: string = this.router.url.substring(
           0,
           this.router.url.indexOf('?')
         );
         this.router.navigateByUrl(url);
       });
     }

    $(function () {
      'use strict';
      skinChanger();
      CustomScrollbar();
      initSparkline();
      initCounters();
      CustomPageJS();
    });
    // Sparkline
    function initSparkline() {
      $('.sparkline').each(function () {
        const $this = $(this);
        $this.sparkline('html', $this.data());
      });
    }
    // Counters JS
    function initCounters() {
      $('.count-to').countTo();
    }
    // Skin changer
    function skinChanger() {
      $('.right-sidebar .choose-skin li').on('click', function () {
        const $body = $('body');
        const $this = $(this);

        const existTheme = $('.right-sidebar .choose-skin li.active').data('theme');
        $('.right-sidebar .choose-skin li').removeClass('active');
        $body.removeClass('theme-' + existTheme);
        $this.addClass('active');
        $body.addClass('theme-' + $this.data('theme'));
      });
    }
    // All Custom Scrollbar JS
    function CustomScrollbar() {
      $('.sidebar .menu .list').slimscroll({
        height: 'calc(100vh - 65px)',
        color: 'rgba(0,0,0,0.2)',
        position: 'left',
        size: '2px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '0'
      });

      $('.navbar-left .dropdown-menu .body .menu').slimscroll({
        height: '300px',
        color: 'rgba(0,0,0,0.2)',
        size: '3px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '0'
      });

      $('.right_chat .chat_body .chat-widget').slimscroll({
        height: 'calc(100vh - 145px)',
        color: 'rgba(0,0,0,0.1)',
        size: '2px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '2px',
        position: 'left',
      });

      $('.right-sidebar .slim_scroll').slimscroll({
        height: 'calc(100vh - 60px)',
        color: 'rgba(0,0,0,0.4)',
        size: '2px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '0'
      });

    }

    function CustomPageJS() {
      $('.boxs-close').on('click', function () {
        const element = $(this);
        const cards = element.parents('.card');
        cards.addClass('closed').fadeOut();
      });

      // Theme Light and Dark  ============
      $('.theme-light-dark .t-light').on('click', function () {
        $('body').removeClass('menu_dark');
      });

      $('.theme-light-dark .t-dark').on('click', function () {
        $('body').addClass('menu_dark');
      });

      $('.menu-sm').on('click', function () {
        $('body').toggleClass('menu_sm');
      });
      // Chat widget js ====
      $(document).ready(function () {
        $('.btn_overlay').on('click', function () {
          $('.overlay_menu').fadeToggle(200);
          $(this).toggleClass('btn-open').toggleClass('btn-close');
        });
      });
      $('.overlay_menu').on('click', function () {
        $('.overlay_menu').fadeToggle(200);
        $('.overlay_menu button.btn').toggleClass('btn-open').toggleClass('btn-close');
      });
      // =========
      $('.form-control').on('focus', function () {
        $(this).parent('.input-group').addClass('input-group-focus');
      }).on('blur', function () {
        $(this).parent('.input-group').removeClass('input-group-focus');
      });
    }
    // Fullscreen
    $(function () {
      'use strict';
      $('#supported').text('Supported/allowed: ' + !!screenfull.enabled);

      if (!screenfull.enabled) {
        return false;
      }

      $('#request').on('click', function () {
        screenfull.request($('#container')[0]);
        // Does not require jQuery. Can be used like this too:
        // screenfull.request(document.getElementById('container'));
      });

      $('#exit').on('click', function () {
        screenfull.exit();
      });

      $('[data-provide~="boxfull"]').on('click', function () {
        screenfull.toggle($('.box')[0]);
      });

      $('[data-provide~="fullscreen"]').on('click', function () {
        screenfull.toggle($('#container')[0]);
      });

      // var selector = '[data-provide~="boxfull"]';
      const selector = '[data-provide~="fullscreen"]';

      $(selector).each(function () {
        $(this).data('fullscreen-default-html', $(this).html());
      });

      document.addEventListener(screenfull.raw.fullscreenchange, function () {
        if (screenfull.isFullscreen) {
          $(selector).each(function () {
            $(this).addClass('is-fullscreen');
          });
        } else {
          $(selector).each(function () {
            $(this).removeClass('is-fullscreen');
          });
        }
      });


      function fullscreenchange() {
        const elem = screenfull.element;

        $('#status').text('Is fullscreen: ' + screenfull.isFullscreen);

        if (elem) {
          $('#element').text('Element: ' + elem.localName + (elem.id ? '#' + elem.id : ''));
        }

        if (!screenfull.isFullscreen) {
          $('#external-iframe').remove();
          document.body.style.overflow = 'auto';
        }
      }

      screenfull.on('change', fullscreenchange);

      // Set the initial values
      fullscreenchange();
    }); // End of use strict
  }

   ngOnDestroy(): void {
  //   if (this.isAuthorizedSubscription) {
  //     this.isAuthorizedSubscription.unsubscribe();
  //   }
   }

   login() {
     console.log('start login');
     this._authService.login();
   }

  // refreshSession() {
  //   console.log('start refreshSession');
  //   this.oidcSecurityService.authorize();
  // }

   logout() {
     console.log('start logoff');
     this._authService.logout();
   }
   
   isLoggedIn() {
     return this._authService.isLoggedIn();
   }

  // get givenName() {
  //   //return 'Daryl';
  //   return this.userData.given_name;
  // }


  // private doCallbackLogicIfRequired() {
  //   if (window.location.hash) {
  //     this.oidcSecurityService.authorizedCallback();
  //   }
  // }
}
