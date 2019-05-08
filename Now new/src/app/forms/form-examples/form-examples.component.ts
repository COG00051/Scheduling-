import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-form-examples',
  templateUrl: './form-examples.component.html',
  styleUrls: ['./form-examples.component.css']
})
export class FormExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
