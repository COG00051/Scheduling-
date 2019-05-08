import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
      this.route.fragment.subscribe ( f => {
          const element = document.querySelector ( '#' + f );
          if ( element ) {
            element.scrollIntoView ();
          }
      });
  }

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
