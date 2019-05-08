import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-footable',
  templateUrl: './footable.component.html',
  styleUrls: ['./footable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FootableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.table').footable({
          'paging': {
              'enabled': true
          },
          'sorting': {
              'enabled': true
          }
      });
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
