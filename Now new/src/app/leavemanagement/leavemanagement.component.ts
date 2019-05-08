import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { JsonFileService } from './json-file.service';


declare const $: any;
declare const Morris: any;
declare const slimscroll: any;

@Component({
  selector: 'app-leavemanagement',
  templateUrl: './leavemanagement.component.html',
  //styleUrls: ['./leavemanagement.component.css']
})

export class LeaveManagementComponent implements OnInit {
  allFilings: any;
  allLeaveCredits: any;
  userDataSubscription: Subscription;
  userData: any;

  isAuthorizedSubscription: Subscription | undefined;
  isAuthorized = false;

  constructor(public oidcSecurityService: OidcSecurityService, private JsonFileService: JsonFileService) {

  }

  ngOnInit() {
    this.JsonFileService.getJSONLeaveReqAndApp({
      "UserId": "00000000-0000-0000-0000-000000000001"
    }).subscribe(reqAppFilingData => {
      this.allFilings = reqAppFilingData;
      console.log(this.allFilings);

    })

     this.JsonFileService.getJSONViewLeaveCredits({
        "UserId": "00000000-0000-0000-0000-000000000001"
     }).subscribe(leaveCredits => {
       this.allLeaveCredits = leaveCredits;
       console.log(this.allLeaveCredits);
     })
  }

  saveFiling() {
    let leaveName = (<HTMLSelectElement>document.getElementById('leaveTypeDropDown')).value;
    let leaveType = (<HTMLSelectElement>document.getElementById('leaveType2')).value;
    let startDate = (<HTMLInputElement>document.getElementById('leaveStartDate')).value;
    let endDate = (<HTMLInputElement>document.getElementById('leaveEndDate')).value;
    let reason = (<HTMLInputElement>document.getElementById('txtLeaveReason')).value;

    this.JsonFileService.getJSONLeaveFiling({
      LeaveId : "3D972D23-3BC6-43FC-1BB2-08D6C86B735B",
      Consumed: leaveType,
      LeaveStartDate: startDate,
      LeaveEndDate: endDate,
      Reason: reason,
      UserId: "00000000-0000-0000-0000-000000000001"
    }).subscribe(data => {
       console.log(data);
    });

    console.log(leaveName);
    console.log(leaveType);
    console.log(startDate);
    console.log(endDate);
    console.log(reason);
  }

  get givenName() {
    return this.userData.given_name;
  }

}//Class
