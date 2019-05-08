import { Component, OnInit, Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';


declare const $: any;
declare const Morris: any;
declare const slimscroll: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  userDataSubscription: Subscription;
  userData: any;

  isAuthorizedSubscription: Subscription | undefined;
  isAuthorized = false;

  constructor(public oidcSecurityService: OidcSecurityService
  ) {
  }

  get givenName() {
    return this.userData.given_name;
  }

  ngOnInit() {
    this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
      (isAuthorized: boolean) => {
        this.isAuthorized = isAuthorized;
      });

    this.userDataSubscription = this.oidcSecurityService.getUserData().subscribe((userData: any) => {
      this.userData = userData;
    });

    //Charts
    MorrisBarChart();

    // Morris bar chart
    function MorrisBarChart() {
      Morris.Bar({
        element: 'm_bar_chart',
        data: [{
          y: '1/11/2018',
          a: 80,
          b: 56,
          c: 89
        }, {
          y: '1/12/2018',
          a: 75,
          b: 65,
          c: 38
        }, {
          y: '1/13/2018',
          a: 59,
          b: 30,
          c: 37
        }, {
          y: '1/14/2018',
          a: 75,
          b: 65,
          c: 40
        }, {
          y: '1/15/2018',
          a: 55,
          b: 40,
          c: 45
        }, {
          y: '1/16/2018',
          a: 75,
          b: 65,
          c: 40
        }, {
          y: '1/17/2018',
          a: 87,
          b: 88,
          c: 36
        }, {
          y: '1/18/2018',
          a: 87,
          b: 88,
          c: 36
        }, {
          y: '1/19/2018',
          a: 87,
          b: 88,
          c: 36
        }, {
          y: '1/20/2018',
          a: 87,
          b: 88,
          c: 36
        }, {
          y: '1/21/2018',
          a: 87,
          b: 88,
          c: 36
        }, {
          y: '1/22/2018',
          a: 87,
          b: 88,
          c: 36
        }, {
          y: '1/23/2018',
          a: 87,
          b: 88,
          c: 36
        }, {
          y: '1/24/2018',
          a: 87,
          b: 88,
          c: 36
        }, {
          y: '1/25/2018',
          a: 87,
          b: 88,
          c: 36
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Rendered Hours', 'Tardiness', 'Undertime'],
        barColors: ['#757575', '#26c6da', '#ffcc80'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true,
        stacked: true
      });
    }

    $('.js-exportable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });


    $('.sparklines').each(function () {
      const $this = $(this);
      $this.sparkline('html', $this.data());
    });
    $('.cwidget-scroll').slimscroll({
      height: '306px',
      color: 'rgba(0,0,0,0.4)',
      size: '2px',
      alwaysVisible: false,
      borderRadius: '3px',
      railBorderRadius: '2px'
    });
    $('.boxs-close').on('click', function () {
      $(this).parents('.card').addClass('closed').fadeOut();
    });
    $(function () {
      'use strict';
      initDonutChart();
      MorrisArea();
      Jknob();
      initCounters();
      // CustomizedLine();
    });
    // Counters JS
    function initCounters() {
      $('.count-to').countTo();
    }
    function initDonutChart() {
      Morris.Donut({
        element: 'donut_chart',
        data: [{
          label: 'iOS',
          value: 21
        }, {
          label: 'Mac',
          value: 39
        }, {
          label: 'Linux',
          value: 9
        }, {
          label: 'Win',
          value: 31
        }
        ],
        colors: ['#78c5d6', '#459ba8', '#79c267', '#c5d647'],
        formatter: function (y) {
          return y + '%';
        }
      });
    }

    // ======
    function MorrisArea() {
      Morris.Area({
        element: 'area_chart',
        data: [{
          period: '2011',
          Project1: 2,
          Project2: 0,
          Project3: 0
        }, {
          period: '2012',
          Project1: 50,
          Project2: 15,
          Project3: 5
        }, {
          period: '2013',
          Project1: 15,
          Project2: 50,
          Project3: 23
        }, {
          period: '2014',
          Project1: 45,
          Project2: 12,
          Project3: 7
        }, {
          period: '2015',
          Project1: 20,
          Project2: 32,
          Project3: 55
        }, {
          period: '2016',
          Project1: 39,
          Project2: 67,
          Project3: 20
        }, {
          period: '2017',
          Project1: 20,
          Project2: 9,
          Project3: 5
        }
        ],
        lineColors: ['#555555', '#a890d3', '#fbcaad'],
        xkey: 'period',
        ykeys: ['Project1', 'Project2', 'Project3'],
        labels: ['Project1', 'Project2', 'Project3'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        behaveLikeLine: true,
        gridLineColor: '#4e4e4e',
        hideHover: 'auto'
      });

      Morris.Area({
        element: 'm_area_chart',
        data: [{
          period: '2014',
          iphone: 78,
          ipad: 45,
          itouch: 55
        }, {
          period: '2015',
          iphone: 68,
          ipad: 45,
          itouch: 140
        }, {
          period: '2016',
          iphone: 59,
          ipad: 124,
          itouch: 85
        }, {
          period: '2017',
          iphone: 170,
          ipad: 156,
          itouch: 120
        }
        ],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors: ['#222222', '#cccccc', '#ffc107'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 2,
        hideHover: 'auto',
        lineColors: ['#222222', '#cccccc', '#ffc107'],
        resize: true

      });
    }
    // ======
    function Jknob() {
      $('.knob').knob({
        draw: function () {
          // 'tron' case
          if (this.$.data('skin') === 'tron') {

            var a = this.angle(this.cv) // Angle
              ,
              sa = this.startAngle // Previous start angle
              ,
              sat = this.startAngle // Start angle
              ,
              ea // Previous end angle
              , eat = sat + a // End angle
              ,
              r = true;

            this.g.lineWidth = this.lineWidth;

            this.o.cursor &&
              (sat = eat - 0.3) &&
              (eat = eat + 0.3);

            if (this.o.displayPrevious) {
              ea = this.startAngle + this.angle(this.value);
              this.o.cursor &&
                (sa = ea - 0.3) &&
                (ea = ea + 0.3);
              this.g.beginPath();
              this.g.strokeStyle = this.previousColor;
              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
              this.g.stroke();
            }

            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();

            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();

            return false;
          }
        }
      });
    }
    // ======
    $(window).on('scroll', function () {
      $('.card .sparkline').each(function () {
        const imagePos = $(this).offset().top;

        const topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
          $(this).addClass('pullUp');
        }
      });
    });
    // ======

    /*VectorMap Init*/

    $(function () {
      'use strict';
      const mapData = {
        'US': 298,
        'SA': 200,
        'AU': 760,
        'IN': 2000000,
        'GB': 120,
      };

      if ($('#world-map-markers').length > 0) {
        $('#world-map-markers').vectorMap(
          {
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            borderColor: '#fff',
            borderOpacity: 0.25,
            borderWidth: 0,
            color: '#e6e6e6',
            regionStyle: {
              initial: {
                fill: '#f4f4f4'
              }
            },

            markerStyle: {
              initial: {
                r: 5,
                'fill': '#fff',
                'fill-opacity': 1,
                'stroke': '#000',
                'stroke-width': 1,
                'stroke-opacity': 0.4
              },
            },

            markers: [{
              latLng: [21.00, 78.00],
              name: 'INDIA : 350'

            },
            {
              latLng: [-33.00, 151.00],
              name: 'Australia : 250'

            },
            {
              latLng: [36.77, -119.41],
              name: 'USA : 250'

            },
            {
              latLng: [55.37, -3.41],
              name: 'UK   : 250'

            },
            {
              latLng: [25.20, 55.27],
              name: 'UAE : 250'

            }],

            series: {
              regions: [{
                values: {
                  'US': '#49c5b6',
                  'SA': '#667add',
                  'AU': '#50d38a',
                  'IN': '#60bafd',
                  'GB': '#ff758e',
                },
                attribute: 'fill'
              }]
            },
            hoverOpacity: null,
            normalizeFunction: 'linear',
            zoomOnScroll: false,
            scaleColors: ['#000000', '#000000'],
            selectedColor: '#000000',
            selectedRegions: [],
            enableZoom: false,
            hoverColor: '#fff',
          });
      }

      if ($('#india').length > 0) {
        $('#india').vectorMap({
          map: 'in_mill',
          backgroundColor: 'transparent',
          regionStyle: {
            initial: {
              fill: '#f4f4f4'
            }
          }
        });
      }

      if ($('#usa').length > 0) {
        $('#usa').vectorMap({
          map: 'us_aea_en',
          backgroundColor: 'transparent',
          regionStyle: {
            initial: {
              fill: '#f4f4f4'
            }
          }
        });
      }

      if ($('#australia').length > 0) {
        $('#australia').vectorMap({
          map: 'au_mill',
          backgroundColor: 'transparent',
          regionStyle: {
            initial: {
              fill: '#f4f4f4'
            }
          }
        });
      }

      if ($('#uk').length > 0) {
        $('#uk').vectorMap({
          map: 'uk_mill_en',
          backgroundColor: 'transparent',
          regionStyle: {
            initial: {
              fill: '#f4f4f4'
            }
          }
        });
      }
    });

    // When page load
    $.each($('.menu .list li.active'), function (i, val) {
      const $activeAnchors = $(val).find('a:eq(0)');

      $activeAnchors.addClass('toggled');
      $activeAnchors.next().show();
    });

    // Collapse or Expand Menu
    $('.menu-toggle').on('click', function (e) {
      const $this = $(this);
      const $content = $this.next();

      if ($($this.parents('ul')[0]).hasClass('list')) {
        const $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

        $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
          if ($(val).is(':visible')) {
            $(val).prev().toggleClass('toggled');
            $(val).slideUp();
          }
        });
      }

      $this.toggleClass('toggled');
      $content.slideToggle(320);
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
