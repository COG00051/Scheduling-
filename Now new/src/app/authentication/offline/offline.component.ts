import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})
export class OfflineComponent implements OnInit {
  year = (new Date()).getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
