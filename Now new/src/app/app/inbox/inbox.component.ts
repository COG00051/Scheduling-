import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.sidebar .menu .list').slimscroll({
          height: 'calc(100vh - 65px)',
          color: 'rgba(0,0,0,0.2)',
          position: 'left',
          size: '2px',
          alwaysVisible: false,
          borderRadius: '3px',
          railBorderRadius: '0'
      });
  }

}
