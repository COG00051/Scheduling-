import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
}

@Injectable()

export class JsonFileService {

  constructor(private http: HttpClient) {
    //this.getJSON().subscribe(data => {
    //  console.log(data);
    //});
  }

  public processRawLogs(data) {
    return new Promise(resolve => {
      console.log(data);
      let url = "https://dev-now.empleyado.com/api/schedule/ProcessRawlogs";
      //let url = "https://jsonplaceholder.typicode.com/posts";
      this.http.post(
        url,
        data,
        httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        }, err => {
          console.log(err);
        }
      );
    });
  }

  // public getJSON(): Observable<any> {
  //   return this.http.get("https://dev-now.empleyado.com/api/shift");
    
  // }

  // public getJSONLeaveManagement(leaveData): Observable<any> {
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.post("https://localhost:44357/Api/LeaveMaintenanceApi/InsertLeaveManagement", leaveData, { headers: headers });
  // }

  public getJSONLeaveFiling(leaveFilingData): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post("https://localhost:44357/Api/FilingApi/InsertLeaveRequest", leaveFilingData, { headers: headers });
  }

  // public getJSONLeaveReqAndApp(reqAppFilingData): Observable<any> {
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.post("https://localhost:44357/Api/FilingApi/ViewLeaveHistory", reqAppFilingData, { headers: headers });
  // }

}
