import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-progressbars',
  templateUrl: './progressbars.component.html',
  styleUrls: ['./progressbars.component.css']
})
export class ProgressbarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
