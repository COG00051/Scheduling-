import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-sparklines',
  templateUrl: './sparklines.component.html',
  styleUrls: ['./sparklines.component.css']
})
export class SparklinesComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        $('.boxs-close').on('click', function() {
            $(this).parents('.card').addClass('closed').fadeOut();
        });
        $('.sparkline').each(function() {
            const $this = $(this);
            $this.sparkline('html', $this.data());
        });
        $('.sparkline-pie').sparkline('html', {
            type: 'pie',
            offset: 90,
            width: '150px',
            height: '150px',
            sliceColors: ['#cbd1d9', '#fab2c0', '#ffe6aa']
        });

        drawDocSparklines();
        drawMouseSpeedDemo();

        // Taken from http://omnipotent.net/jquery.sparkline
        function drawDocSparklines() {

            // Bar + line composite charts
            $('#compositebar').sparkline('html', { type: 'bar', barColor: '#aaf' });
            $('#compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7],
                { composite: true, fillColor: false, lineColor: 'red' });


            // Line charts taking their values from the tag
            $('.sparkline-1').sparkline();

            // Larger line charts for the docs
            $('.largeline').sparkline('html',
                { type: 'line', height: '2.5em', width: '4em' });

            // Customized line chart
            $('#linecustom').sparkline('html',
                {
                    height: '1.5em', width: '8em', lineColor: '#f00', fillColor: '#ffa',
                    minSpotColor: false, maxSpotColor: false, spotColor: '#77f', spotRadius: 3
                });

            // Bar charts using inline values
            $('.sparkbar').sparkline('html', { type: 'bar' });

            $('.barformat').sparkline([1, 3, 5, 3, 8], {
                type: 'bar',
                tooltipFormat: '{{value:levels}} - {{value}}',
                tooltipValueLookups: {
                    levels: $.range_map({ ':2': 'Low', '3:6': 'Medium', '7:': 'High' })
                }
            });

            // Tri-state charts using inline values
            $('.sparktristate').sparkline('html', { type: 'tristate' });
            $('.sparktristatecols').sparkline('html',
                { type: 'tristate', colorMap: { '-2': '#fa7', '2': '#44f' } });

            // Composite line charts, the second using values supplied via javascript
            $('#compositeline').sparkline('html', { fillColor: false, changeRangeMin: 0, chartRangeMax: 10 });
            $('#compositeline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7],
                { composite: true, fillColor: false, lineColor: 'red', changeRangeMin: 0, chartRangeMax: 10 });

            // Line charts with normal range marker
            $('#normalline').sparkline('html',
                { fillColor: false, normalRangeMin: -1, normalRangeMax: 8 });
            $('#normalExample').sparkline('html',
                { fillColor: false, normalRangeMin: 80, normalRangeMax: 95, normalRangeColor: '#4f4' });

            // Discrete charts
            $('.discrete1').sparkline('html',
                { type: 'discrete', lineColor: 'blue', xwidth: 18 });
            $('#discrete2').sparkline('html',
                { type: 'discrete', lineColor: 'blue', thresholdColor: 'red', thresholdValue: 4 });

            // Bullet charts
            $('.sparkbullet').sparkline('html', { type: 'bullet' });

            // Pie charts
            $('.sparkpie').sparkline('html', { type: 'pie', height: '1.0em' });

            // Box plots
            $('.sparkboxplot').sparkline('html', { type: 'box' });
            $('.sparkboxplotraw').sparkline([1, 3, 5, 8, 10, 15, 18],
                { type: 'box', raw: true, showOutliers: true, target: 6 });

            // Box plot with specific field order
            $('.boxfieldorder').sparkline('html', {
                type: 'box',
                tooltipFormatFieldlist: ['med', 'lq', 'uq'],
                tooltipFormatFieldlistKey: 'field'
            });

            // click event demo sparkline
            $('.clickdemo').sparkline();
            $('.clickdemo').bind('sparklineClick', function (ev) {
                const sparkline = ev.sparklines[0],
                    region = sparkline.getCurrentRegionFields();
                const value = region.y;
                alert('Clicked on x=' + region.x + ' y=' + region.y);
            });

            // mouseover event demo sparkline
            $('.mouseoverdemo').sparkline();
            $('.mouseoverdemo').bind('sparklineRegionChange', function (ev) {
                const sparkline = ev.sparklines[0],
                    region = sparkline.getCurrentRegionFields();
                const value = region.y;
                $('.mouseoverregion').text('x=' + region.x + ' y=' + region.y);
            }).bind('mouseleave', function () {
                $('.mouseoverregion').text('');
            });
        }

        /**
         ** Draw the little mouse speed animated graph
         ** This just attaches a handler to the mousemove event to see
         ** (roughly) how far the mouse has moved
         ** and then updates the display a couple of times a second via
         ** setTimeout()
         **/
        function drawMouseSpeedDemo() {
            const mrefreshinterval = 500; // update display every 500ms
            let lastmousex = -1;
            let lastmousey = -1;
            let lastmousetime;
            let mousetravel = 0;
            const mpoints = [];
            const mpoints_max = 30;
            $('html').mousemove(function (e) {
                const mousex = e.pageX;
                const mousey = e.pageY;
                if (lastmousex > -1) {
                    mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
                }
                lastmousex = mousex;
                lastmousey = mousey;
            });
            const mdraw = function () {
                const md = new Date();
                const timenow = md.getTime();
                if (lastmousetime && lastmousetime !== timenow) {
                    const pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                    mpoints.push(pps);
                    if (mpoints.length > mpoints_max) {
                        mpoints.splice(0, 1);
                    }
                    mousetravel = 0;
                    $('#mousespeed').sparkline(mpoints, { width: mpoints.length * 2, tooltipSuffix: ' pixels per second' });
                }
                lastmousetime = timenow;
                setTimeout(mdraw, mrefreshinterval);
            };
            // We could use setInterval instead, but I prefer to do it this way
            setTimeout(mdraw, mrefreshinterval);
        }

        // ====

        $('#sparkline14').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
            type: 'line',
            width: '100%',
            height: '100',
            lineColor: '#fff',
            fillColor: 'transparent',
            spotColor: '#fff',
            minSpotColor: undefined,
            maxSpotColor: undefined,
            highlightSpotColor: undefined,
            highlightLineColor: undefined
        });

        $('#sparkline16').sparkline([15, 23, 45, 20, 54, 45, 35, 57, 30], {
            type: 'line',
            width: '100%',
            height: '100',
            chartRangeMax: 50,
            resize: true,
            lineColor: '#13dafe',
            fillColor: 'rgba(53,196, 193, 0.3)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });

        $('#sparkline16').sparkline([8, 17, 13, 14, 10, 16, 17, 20, 12, 27], {
            type: 'line',
            width: '100%',
            height: '100',
            chartRangeMax: 40,
            lineColor: '#6164c1',
            fillColor: 'rgba(247, 132, 155, 0.3)',
            composite: true,
            resize: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });
    }

}
