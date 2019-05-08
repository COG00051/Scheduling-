import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const CKEDITOR: any;

@Component({
  selector: 'app-form-editors',
  templateUrl: './form-editors.component.html',
  styleUrls: ['./form-editors.component.css']
})
export class FormEditorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
      CKEDITOR.replace('ckeditor');
      CKEDITOR.config.height = 300;
  }

}
