import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-table-color',
  templateUrl: './table-color.component.html',
  styleUrls: ['./table-color.component.css']
})
export class TableColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
