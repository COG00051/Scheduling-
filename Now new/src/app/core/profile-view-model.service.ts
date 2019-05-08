import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserProfile } from '../model/user-profile';
import { Constants } from '../constants';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Profile } from '../model/profile';

@Injectable()
export class ProfileViewModelService {

  localStorage;

  constructor(private http: HttpClient, private _authService: AuthService) { }

  public getProfileDetails(): Observable<Profile[]> {

    this.localStorage = JSON.parse(localStorage.getItem("oidc.user:" + Constants.stsAuthority + ":" + Constants.clientId));
    var id_token = this.localStorage.id_token;

    var accessToken = this._authService.getAccessToken();
    var headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
                                   .set('Content-Type', `application/json`);

    return this.http.post<Profile[]>(Constants.apiRoot + "Profile/GetEmployee", id_token, { headers: headers } );
  }

}
