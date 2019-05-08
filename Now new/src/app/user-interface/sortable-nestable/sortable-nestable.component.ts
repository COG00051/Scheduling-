import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-sortable-nestable',
  templateUrl: './sortable-nestable.component.html',
  styleUrls: ['./sortable-nestable.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SortableNestableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.dd').nestable();

      $('.dd').on('change', function () {
          const $this = $(this);
          const serializedData = JSON.stringify($($this).nestable('serialize'));

          $this.parents('div.body').find('textarea').val(serializedData);
      });
  }

}
