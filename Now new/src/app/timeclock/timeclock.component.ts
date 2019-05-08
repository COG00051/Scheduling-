import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import * as moment from 'moment-timezone';

import { JsonFileService } from '../json-file.service';

import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';


declare const $: any;
//declare const Morris: any;
//declare const slimscroll: any;
//declare const GMaps: any;

@Component({
  selector: 'app-timeclock',
  templateUrl: './timeclock.component.html',
  styleUrls: ['./timeclock.component.css']
})

export class TimeClockComponent implements OnInit {
  userDataSubscription: Subscription;
  userData: any;

  isAuthorizedSubscription: Subscription | undefined;
  isAuthorized = false;

  lat: any;
  lng: any;
  server: any;
  local: any;
  timedIn: boolean = true;
  locations = [];
  timezones: Array<any> = [{name: "Manila", tz: "Asia/Manila"}, {name: "Los Angeles", tz: "America/Los_Angeles"}, {name: "London", tz: "Europe/London"}, {name: "Sydney", tz: "Australia/Sydney"}]

  serverClock;

  public pictureTaken = new EventEmitter<WebcamImage>();

  // toggle webcam on/off
  public showWebcam = true;
  // public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  // latest snapshot
  public webcamImage: WebcamImage = null;
  public splitWebCamImage;

  constructor(public oidcSecurityService: OidcSecurityService, private JsonFileService: JsonFileService
  ) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  get givenName() {
    return this.userData.given_name;
  }

  getLocation(): void {
    // this.timedIn = true;
    this.trigger.next();
    let x = <HTMLInputElement>document.getElementById("longitude");
    let y = <HTMLInputElement>document.getElementById("latitude");
    let local = <HTMLInputElement>document.getElementById("local");
    let picture = <HTMLInputElement>document.getElementById("picture");
    let localtime = <HTMLInputElement>document.getElementById("localtime");
    let publicIp = <HTMLInputElement>document.getElementById("public");
    let privateIp = <HTMLInputElement>document.getElementById("private");
    let err = document.getElementById("not-supported");

    let split = this.webcamImage.imageAsDataUrl.split(',').pop();

    picture.value = "" + split;
    
    local.value = "" + localtime.innerHTML;
    
    console.log(split);

    this.splitWebCamImage = picture.value;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        x.value = "" + pos.coords.longitude;
        y.value = "" + pos.coords.latitude;
        this.locations.push({ lng: pos.coords.longitude, lat: pos.coords.latitude, time: local.value, picture: picture.value,  publicIp : publicIp.value, privateIp: privateIp.value });
        console.log(this.locations);

        this.JsonFileService.setLogIn({
          "SourceId" : "00000000-0000-0000-0000-000000000001",
          "Value" : "00000000-0000-0000-0000-000000000001",
          "Time" : localtime.innerHTML,
          "Photo" : picture.value,
          "Ip" : publicIp.value,
          "Long" : pos.coords.longitude,
          "Lat" : pos.coords.latitude
        }).subscribe(data => {
          console.log(data);
        })

      });

    } else {
      err.innerHTML = "Geolocation is not supported by this browser.";
    }

  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  ngOnInit(): void {

    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });

     this.JsonFileService.getServerClock().subscribe(data => {
       const serverTime = data;
       this.serverClock = serverTime;
       function update() {
         $('.digital-clock').html(moment.tz(this.serverClock, "Asia/Manila").format('HH:mm:ss'));
         $('.digital-clock-raw').html(moment.tz(this.serverClock, "Asia/Manila").format());
       }
       setInterval(update, 1000);
     });



  }

}
