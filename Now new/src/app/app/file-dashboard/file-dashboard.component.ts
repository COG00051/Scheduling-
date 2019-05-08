import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const Morris: any;

@Component({
  selector: 'app-file-dashboard',
  templateUrl: './file-dashboard.component.html',
  styleUrls: ['./file-dashboard.component.css']
})
export class FileDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
      Morris.Area({
          element: 'm_area_chart',
          data: [{
              period: '2011',
              Documents: 45,
              Media: 26,
              Images: 68
          }, {
              period: '2012',
              Documents: 55,
              Media: 48,
              Images: 82
          }, {
              period: '2013',
              Documents: 80,
              Media: 60,
              Images: 99
          }, {
              period: '2014',
              Documents: 78,
              Media: 205,
              Images: 98
          }, {
              period: '2015',
              Documents: 180,
              Media: 124,
              Images: 201
          }, {
              period: '2016',
              Documents: 105,
              Media: 68,
              Images: 168
          },
              {
                  period: '2017',
                  Documents: 210,
                  Media: 180,
                  Images: 223
              }
          ],
          xkey: 'period',
          ykeys: ['Documents', 'Media', 'Images'],
          labels: ['Documents', 'Media', 'Images'],
          pointSize: 2,
          fillOpacity: 0,
          pointStrokeColors: ['#f7bb97', '#a890d3', '#72c2ff'],
          behaveLikeLine: true,
          gridLineColor: '#4c4c4c',
          lineWidth: 2,
          hideHover: 'auto',
          lineColors: ['#f7bb97', '#a890d3', '#72c2ff'],
          resize: true

      });
      $('.sidebar .menu .list').slimscroll({
          height: 'calc(100vh - 65px)',
          color: 'rgba(0,0,0,0.2)',
          position: 'left',
          size: '2px',
          alwaysVisible: false,
          borderRadius: '3px',
          railBorderRadius: '0'
      });
  }

}
