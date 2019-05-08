import { BrowserModule } from '@angular/platform-browser';
import { Configuration } from './app.constants';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TimeClockComponent } from './timeclock/timeclock.component';
import { TimeRecordsComponent } from './timerecords/timerecords.component';
import { LeaveManagementComponent } from './leavemanagement/leavemanagement.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

import { JsonFileService } from './json-file.service';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { AuthorizationGuard } from './authorization.guard';
import { AuthorizationCanGuard } from './authorization.can.guard';
import { AuthModule,
OidcSecurityService,
OidcConfigService,
AuthWellKnownEndpoints,
  OpenIDImplicitFlowConfiguration
} from 'angular-auth-oidc-client';
import { AgmCoreModule } from '@agm/core';


import { CoreModule } from './core/core.module';
import { ProfileViewModelService } from './core/profile-view-model.service';
import { WebcamModule } from 'ngx-webcam';


export function loadConfig(oidcConfigService: OidcConfigService) {
  console.log('APP_INITIALIZER STARTING');
  return () => oidcConfigService.load(`${window.location.origin}/api/HubSettings`);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeClockComponent,
    TimeRecordsComponent,
    LeaveManagementComponent,
    SchedulingComponent,
    UnauthorizedComponent,

  ],
  imports: [
    CoreModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    WebcamModule,
    AuthModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCM4Cq46sTxLGAqRB1L9BmjkVuoLq05Vw'
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    OidcConfigService,
    OidcSecurityService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [OidcConfigService],
      multi: true
    },
    OidcSecurityService,
    AuthorizationGuard,
    AuthorizationCanGuard,
    Configuration,
    JsonFileService,
    ProfileViewModelService,
  ],
})

export class AppModule {
  constructor(
    public oidcSecurityService: OidcSecurityService
  ) {
    const openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();

    openIDImplicitFlowConfiguration.stsServer = 'https://dev-accounts.empleyado.com';
    openIDImplicitFlowConfiguration.redirect_url = 'https://localhost:44352/signin-oidc';
    // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
    // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
    openIDImplicitFlowConfiguration.client_id = 'empleyadoWebForm';
    openIDImplicitFlowConfiguration.response_type = 'id_token token';
    openIDImplicitFlowConfiguration.scope = 'openid email profile';
    openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'https://localhost:44352/Unauthorized';
    openIDImplicitFlowConfiguration.start_checksession = false;
    openIDImplicitFlowConfiguration.silent_renew = true;
    openIDImplicitFlowConfiguration.silent_renew_url = 'https://localhost:44352/silent-renew.html';
    openIDImplicitFlowConfiguration.post_login_route = '/Home';
    // HTTP 403
    openIDImplicitFlowConfiguration.forbidden_route = '/Forbidden';
    // HTTP 401
    openIDImplicitFlowConfiguration.unauthorized_route = '/Unauthorized';
    openIDImplicitFlowConfiguration.log_console_warning_active = true;
    openIDImplicitFlowConfiguration.log_console_debug_active = true;
    // id_token C8: The iat Claim can be used to reject tokens that were issued too far away from the current time,
    // limiting the amount of time that nonces need to be stored to prevent attacks.The acceptable range is Client specific.
    openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 60;

    const authWellKnownEndpoints = new AuthWellKnownEndpoints();
    authWellKnownEndpoints.issuer = 'https://dev-accounts.empleyado.com';
    authWellKnownEndpoints.jwks_uri = 'https://dev-accounts.empleyado.com/.well-known/openid-configuration/jwks';
    authWellKnownEndpoints.authorization_endpoint = 'https://dev-accounts.empleyado.com/connect/authorize';
    authWellKnownEndpoints.token_endpoint = 'https://dev-accounts.empleyado.com/connect/token';
    authWellKnownEndpoints.userinfo_endpoint = 'https://dev-accounts.empleyado.com/connect/userinfo';
    authWellKnownEndpoints.end_session_endpoint = 'https://dev-accounts.empleyado.com/connect/endsession';
    authWellKnownEndpoints.check_session_iframe = 'https://dev-accounts.empleyado.com/connect/checksession';
    authWellKnownEndpoints.revocation_endpoint = 'https://dev-accounts.empleyado.com/connect/revocation';
    authWellKnownEndpoints.introspection_endpoint = 'https://dev-accounts.empleyado.com/connect/introspect';

    this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration, authWellKnownEndpoints);
  }
}

