import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.css']
})
export class MediaObjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
