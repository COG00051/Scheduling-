import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-app-widgets',
  templateUrl: './app-widgets.component.html',
  styleUrls: ['./app-widgets.component.css']
})
export class AppWidgetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.sparkline').each(function() {
          const $this = $(this);
          $this.sparkline('html', $this.data());
      });
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
