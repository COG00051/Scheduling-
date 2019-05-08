import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css']
})
export class WavesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
