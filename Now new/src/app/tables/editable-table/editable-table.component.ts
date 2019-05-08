import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
      $('#mainTable').editableTableWidget();
  }

}
