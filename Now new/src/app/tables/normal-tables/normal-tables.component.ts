import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-normal-tables',
  templateUrl: './normal-tables.component.html',
  styleUrls: ['./normal-tables.component.css']
})
export class NormalTablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
