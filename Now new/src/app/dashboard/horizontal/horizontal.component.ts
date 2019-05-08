import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;
declare const Morris: any;

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      // Close card
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
      // Sparkline
      $('.sparkline').each(function() {
          const $this = $(this);
          $this.sparkline('html', $this.data());
      });
      // Menu
      $('body.horizontal .menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
      // Checks if li has sub (ul) and adds class for toggle icon - just an UI

      $('body.horizontal .menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');

      $('body.horizontal .menu > ul > li').hover(function(e) {
          if ($(window).width() > 943) {
              $(this).children('ul').stop(true, false).fadeToggle(150);
              e.preventDefault();
          }
      });
      // If width is more than 943px dropdowns are displayed on hover
      $('body.horizontal .menu > ul > li').on('click', function() {
          if ($(window).width() <= 943) {
              $(this).children('ul').fadeToggle(150);
          }
      });
      // If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

      $('body.horizontal .h-bars').on('click', function(e) {
          $('.menu > ul').toggleClass('show-on-mobile');
          e.preventDefault();
      });

      // Morris
      Morris.Area({
          element: 'm_area_chart2',
          data: [{
              period: '2012',
              SiteA: 25,
              SiteB: 0,

          }, {
              period: '2013',
              SiteA: 105,
              SiteB: 89,

          }, {
              period: '2014',
              SiteA: 78,
              SiteB: 55,

          }, {
              period: '2015',
              SiteA: 89,
              SiteB: 185,

          }, {
              period: '2016',
              SiteA: 175,
              SiteB: 105,

          }, {
              period: '2017',
              SiteA: 102,
              SiteB: 148,

          }
          ],
          xkey: 'period',
          ykeys: ['SiteA', 'SiteB'],
          labels: ['Site A', 'Site B'],
          pointSize: 0,
          fillOpacity: 0.5,
          pointStrokeColors: ['#b6b8bb', '#26c6da'],
          behaveLikeLine: true,
          gridLineColor: '#4e4e4e',
          lineWidth: 0,
          smooth: false,
          hideHover: 'auto',
          lineColors: ['#b6b8bb', '#26c6da'],
          resize: true
      });
      // Jknob
      $('.dial1').knob();
      $({animatedVal: 0}).animate({animatedVal: 66}, {
          duration: 4000,
          easing: 'swing',
          step: function() {
              $('.dial1').val(Math.ceil(this.animatedVal)).trigger('change');
          }
      });
      $('.dial2').knob();
      $({animatedVal: 0}).animate({animatedVal: 26}, {
          duration: 4500,
          easing: 'swing',
          step: function() {
              $('.dial2').val(Math.ceil(this.animatedVal)).trigger('change');
          }
      });
      $('.dial3').knob();
      $({animatedVal: 0}).animate({animatedVal: 76}, {
          duration: 3800,
          easing: 'swing',
          step: function() {
              $('.dial3').val(Math.ceil(this.animatedVal)).trigger('change');
          }
      });
      $('.dial4').knob();
      $({animatedVal: 0}).animate({animatedVal: 88}, {
          duration: 5200,
          easing: 'swing',
          step: function() {
              $('.dial4').val(Math.ceil(this.animatedVal)).trigger('change');
          }
      });
  }

}
