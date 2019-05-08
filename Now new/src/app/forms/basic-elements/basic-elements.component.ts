import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BasicElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });

      $('.datetimepicker').bootstrapMaterialDatePicker({
          format: 'dddd DD MMMM YYYY - HH:mm',
          clearButton: true,
          weekStart: 1
      });

      $('.datepicker').bootstrapMaterialDatePicker({
          format: 'dddd DD MMMM YYYY',
          clearButton: true,
          weekStart: 1,
          time: false
      });

      $('.timepicker').bootstrapMaterialDatePicker({
          format: 'HH:mm',
          clearButton: true,
          date: false
      });
  }

}
