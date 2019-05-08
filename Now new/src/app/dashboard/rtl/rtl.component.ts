import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const $: any;
declare const Chart: any;
declare const slimscroll: any;

@Component({
  selector: 'app-rtl',
  templateUrl: './rtl.component.html',
  styleUrls: ['./rtl.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RtlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.sparkline').each(function() {
          const $this = $(this);
          $this.sparkline('html', $this.data());
      });

      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });

      $('.cwidget-scroll').slimscroll({
          height: '306px',
          color: 'rgba(0,0,0,0.4)',
          size: '2px',
          alwaysVisible: false,
          borderRadius: '3px',
          railBorderRadius: '2px'
      });
      $(function () {
          new Chart(document.getElementById('bar_chart'), getChartJs('bar'));
      });
      function getChartJs(type) {
          var config = null;

          if (type === 'bar') {
              config = {
                  type: 'bar',
                  data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [{
                          label: 'My First dataset',
                          data: [28, 48, 40, 19, 86, 27, 90],
                          backgroundColor: '#26c6da',
                          strokeColor: 'rgba(255,118,118,0.1)',
                      }, {
                          label: 'My Second dataset',
                          data: [10, 30, 80, 61, 26, 75, 40],
                          backgroundColor: '#8a8a8b',
                          strokeColor: 'rgba(255,118,118,0.1)',
                      }]
                  },
                  options: {
                      responsive: true,
                      legend: false
                  }
              };
          }
          return config;
      }
  }

}
