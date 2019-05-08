import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import * as moment from 'moment-timezone';
import 'moment-duration-format';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;

@Component({
  selector: 'app-timerecords',
  templateUrl: './timerecords.component.html',
  styleUrls: ['./timerecords.component.scss']
})

export class TimeRecordsComponent implements OnInit {
  userDataSubscription: Subscription;
  userData: any;

  isAuthorizedSubscription: Subscription | undefined;
  isAuthorized = false;

  timeToDisplay;
  logsToDisplay;
  breaksToDisplay;
  restartToDisplay;

  constructor(public oidcSecurityService: OidcSecurityService
  ) {
  }

  get givenName() {
    return this.userData.given_name;
  }

  ngOnInit() {

    this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
      (isAuthorized: boolean) => {
        this.isAuthorized = isAuthorized;
      });

    this.userDataSubscription = this.oidcSecurityService.getUserData().subscribe((userData: any) => {
      this.userData = userData;
    });

    let hoursInSeconds: number = 86400; // 24 hours in seconds

    let timeInLog = "2019-12-25T08:00:00+00:00";
    let endLog = "2019-12-25T12:00:00+00:00";

    let startBreak = "2019-12-25T12:00:00+00:00";
    let endBreak = "2019-12-25T13:00:00+00:00";

    let startLog = "2019-12-25T13:00:00+00:00";
    let timeOutLog = "2019-12-25T18:00:00+00:00";

    // float log
    let convertTime = moment.tz(timeInLog, "Europe/London").format("HH:mm:ss");
    let displayTime = moment(convertTime, 'HH:mm:ss').diff(moment().startOf('day'), 'seconds');

    //first log
    // let convertEndLog = moment.tz(endLog, "Europe/London").format("HH:mm:ss");
    let duration = moment.duration(moment(timeInLog).diff(moment(endLog))).format("HH:mm:ss");
    let displayLog = moment(duration, 'HH:mm:ss').diff(moment().startOf('day'), 'seconds');

    //Break log
    // let convertBreakStartLog = moment.tz(startBreak, "Europe/London").format("HH:mm:ss");
    // let convertBreakEndLog = moment.tz(endBreak, "Europe/London").format("HH:mm:ss");
    let breakDuration = moment.duration(moment(startBreak).diff(moment(endBreak))).format("HH:mm:ss");
    let displayBreakLog = moment(breakDuration, 'HH:mm:ss').diff(moment().startOf('day'), 'seconds');

    //Break log
    // let convertBreakStartLog = moment.tz(startBreak, "Europe/London").format("HH:mm:ss");
    // let convertBreakEndLog = moment.tz(endBreak, "Europe/London").format("HH:mm:ss");
    let duration1 = moment.duration(moment(startLog).diff(moment(timeOutLog))).format("HH:mm:ss");
    let displayRestartLog = moment(duration1, 'HH:mm:ss').diff(moment().startOf('day'), 'seconds');

    console.log(duration1);
    console.log(convertTime);
    // console.log(convertEndLog);
    console.log(displayLog);
    // console.log(convertDayStart);
    // console.log(convertDayEnd);

    let secondsRaw = displayTime / hoursInSeconds;

    let rawLogs = displayLog / hoursInSeconds;

    let breakLogs = displayBreakLog / hoursInSeconds;

    let restartLogs = displayRestartLog / hoursInSeconds;

    console.log(secondsRaw);
    console.log(rawLogs);
    console.log(breakLogs);
    console.log(restartLogs);

    this.timeToDisplay = secondsRaw * 100;
    this.logsToDisplay = rawLogs * 100;
    this.breaksToDisplay = breakLogs * 100;
    this.restartToDisplay = restartLogs * 100;


    console.log(this.timeToDisplay);
    console.log(this.logsToDisplay);
    console.log(this.breaksToDisplay);
    console.log(this.logsToDisplay);

    document.getElementsByClassName('row');
    

  }



}
