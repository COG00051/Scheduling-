import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { JsonFileService } from '../json-file.service';
import * as moment from 'moment-timezone';
import { error } from 'util';


declare const $: any;
declare const Morris: any;
declare const slimscroll: any;

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})

export class SchedulingComponent implements OnInit {
  title = "My Schedule";
  userDataSubscription: Subscription;
  userData: any;
  abbrev;

  isAuthorizedSubscription: Subscription | undefined;
  isAuthorized = false;

  shifts;
  exception;
  schedules = [];
  operatingHours = [];
  isTrue: boolean = false;

  constructor(public oidcSecurityService: OidcSecurityService, private JsonFileService: JsonFileService) {

  }

  get givenName() {
    return this.userData.given_name;
  }

  ngOnInit() {

 //my custom javascript

//  $(function(){
//   $('#resource-schedule-table').DataTable();
// });
    var resourceScheduleTable;
    $(document).ready(function(){
        resourceScheduleTable = $('#resource-schedule-table').DataTable( {
            "scrollY":         "100%",
            "scrollX":         true,
            "scrollCollapse":  true,
            "paging":          false,
            "info":            false,
            "language.search": "Filter",
            "autoWidth":       true,
            "searching":        false,
            "fixedColumns":   {
                "leftColumns": 1,
                 "heightMatch": 'none'
            },
            "columnDefs": [
              { "height": "20px", "targets": [ 0 ] },
              { "width": "250px", "targets": [ 0 ] }, 
              { "width": "100px", "targets": [ '_all' ] }
            ]
        } );
    });
    
  //   $(document).ready(function(){
  //     $('#change-view-week').click(function(){
  //     $('#weekly').show();
  //     $('#weekly-header').show();
  //     $('#calendar').hide();
  //   });

  //   $('#change-view-month').click(function(){
  //     $('#weekly').hide();
  //     $('#weekly-header').hide();
  //     $('#calendar').show();
  //   });


    //Fullcalendar function
    $(function() {
      $('#calendar').fullCalendar({
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        }
      }).handleWindowResize(true);
     });


    //Upcoming event pop up modal
     $('#event').click(function() {
      $('#event-modal').modal('show');
    });

    //for select and hover
    $("tbody tr").click(function () {
    $('.selected').removeClass('selected');
    $(this).addClass("selected");
    });

    //filter for search
  //   function staffSearch() {
  //     var input, filter, table, tr, td, i, txtValue;
  //     input = document.getElementById("tbl-input");
  //     filter = input.value.toUpperCase();
  //     table = document.getElementById("tbl-search");
  //     tr = table.getElementsByTagName("tr");
  //     for (i = 0; i < tr.length; i++) {
  //       td = tr[i].getElementsByTagName("td")[2];
  //       if (td) {
  //         txtValue = td.textContent || td.innerText;
  //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //           tr[i].style.display = "";
  //         } else {
  //           tr[i].style.display = "none";
  //         }   
  //       }       
  //     }
  //   }
  // // });




    // this.JsonFileService.processRawLogs({
    //   EmployeeId: "00000000-0000-0000-0000-000000000001",
    //   DateFrom: "2019-02-02 00:00:00.00 +08:00",
    //   DateTo: "2019-02-10 00:00:00.00 +08:00"
    // }).then(data => {
    //   var branchStatus;
    //   this.isTrue = true;
    //   console.log(data);
    //   this.operatingHours = data.operatingHours.map(item => {
    //     console.log(item);
      //   startTime
      //   console.log(item.startTime);
      //   const startTimeToStore = item.startTime;
      //   const momentStartTimeTz = moment.tz(startTimeToStore, "Asia/Manila").format();
      //   console.log(momentStartTimeTz);

      //   endTime
      //   console.log(item.endTime);
      //   const endTimeToStore = item.endTime;
      //   const momentEndTimeTz = moment.tz(endTimeToStore, "Asia/Manila").format();
      //   console.log(momentEndTimeTz);

      //   branchStatus = item.isOpen;

      //   if (branchStatus) {
      //     branchStatus = "bg-cyan";
      //   }
      //   else {
      //     branchStatus = "bg-grey";
      //   }

      //   return {
      //     title: item.isOpen,
      //     start: momentStartTimeTz,
      //     end: momentEndTimeTz,
      //     className: branchStatus
      //   }
      // }
      // );
      // console.log(this.operatingHours);

      // this.schedules = data.schedules.map(item => {
      //   console.log(item);
      //   startTime
      //   console.log(item.startTime);
      //   const startTimeToStore = item.startTime;  
      //   const momentStartTimeTz = moment.tz(startTimeToStore, "America/Los_Angeles").format();
      //   console.log(momentStartTimeTz);

      //   endTime
      //   console.log(item.endTime);
      //   const endTimeToStore = item.endTime;
      //   const momentEndTimeTz = moment.tz(endTimeToStore, "America/Los_Angeles").format();
      //   console.log(momentEndTimeTz);

      //   return {
      //     title: "schedule",
      //     start: momentStartTimeTz,
      //     end: momentEndTimeTz
      //   }
      // });

      // console.log(this.schedules);

      // this.JsonFileService.getJSONLeaveManagement({
      //   "LeaveTypeName": "Sick Leave",
      //   "Abrev": "SL",
      //   "IsPaid": "1",
      //   "CanBeFiled": "2",
      //   "LevelOfApproval": "3"
      // }).subscribe(leaveData => {
      //   console.log(leaveData);
      // });

      // Charts
      // $('#calendar').fullCalendar({
      //   header: {
      //     left: 'prev',
      //     center: 'title',
      //     right: 'next'
      //   },



      //   editable: true,
      //   droppable: false, // this allows things to be dropped onto the calendar
      //   drop: function () {
      //    // is the "remove after drop" checkbox checked?
      //    if ($('#drop-remove').is(':checked')) {
      //      // if so, remove the element from the "Draggable Events" list
      //      $(this).remove();
      //    }
      //   },

      //   eventLimit: true, // allow "more" link when too many events,
      //   events: this.operatingHours.concat(this.schedules)

      //   // ***********!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //   dayRender: function (date, cell) {
      //    var today = $.fullCalendar.moment();
      //    var end = $.fullCalendar.moment().add(7, 'days');

      //    //if (date.get('date') == today.get('date')) {
      //    //  cell.css("background", "#5d9cc9");
      //    //}//End If

      //    if (branchStatus) {
      //      cell.css("background", "#000");
      //    }
      //    console.log(branchStatus);
      //   }//End Day Render

      //   events: [
      //    {
      //      title: 'All Day Event',
      //      start: '2018-11-01',
      //      className: 'b-l b-2x b-greensea'
      //    },
      //    {
      //      title: 'Long Event',
      //      start: '2018-01-07',
      //      end: '2018-01-10',
      //      className: 'bg-cyan'
      //    },
      //    {
      //      id: 999,
      //      title: 'Repeating Event',
      //      start: '2018-01-09T16:00:00',
      //      className: 'b-l b-2x b-lightred'
      //    },
      //    {
      //      id: 999,
      //      title: 'Repeating Event',
      //      start: '2018-12-16T16:00:00',
      //      className: 'b-l b-2x b-success'
      //    },
      //    {
      //      title: 'Conference',
      //      start: '2018-01-11',
      //      end: '2018-01-13',
      //      className: 'b-l b-2x b-primary'
      //    },
      //    {
      //      title: 'Meeting',
      //      start: '2018-01-12T10:30:00',
      //      end: '2018-01-12 T12:30:00',
      //      className: 'b-l b-2x b-amethyst'
      //    },
      //    {
      //      title: 'Lunch',
      //      start: '2018-01-12T12:00:00',
      //      className: 'b-l b-2x b-primary'
      //    },
      //    {
      //      title: 'Meeting',
      //      start: '2018-01-12T14:30:00',
      //      className: 'b-l b-2x b-drank'
      //    },
      //    {
      //      title: 'Happy Hour',
      //      start: '2018-01-12T17:30:00',
      //      className: 'b-l b-2x b-lightred'
      //    },
      //    {
      //      title: 'Dinner',
      //      start: '2018-12-12T20:00:00',
      //      className: 'b-l b-2x b-amethyst'
      //    },
      //    {
      //      title: 'Birthday Party',
      //      start: '2018-01-13T07:00:00',
      //      className: 'b-l b-2x b-primary'
      //    },
      //    {
      //      title: 'Click for Google',
      //      url: 'http://google.com/',
      //      start: '2018-01-28',
      //      className: 'b-l b-2x b-greensea'
      //    }
      //   ]
      // });

    //   }, err => {
    //     console.log(err);
    //     $("#calendar").html("<div class='text-center'>Internal server error: " + err.name + "</div>");
    //   });

    // this.JsonFileService.processRawLogs({
    //  title: 'foo',
    //  body: 'bar',
    //  userId: 1
    // });






  //   this.JsonFileService.getJSON().subscribe(data => {
  //     console.log(data);      
  //   }, 
  //   err => {
  //     console.log(err.name);
  //     $("#calendar").html("<div class='text-center'>Internal server error: " + err.name + "</div>");
  //     });

  //   // Previous month action
  //   $('#cal-prev').on('click', function () {
  //     $('#calendar').fullCalendar('prev');
  //   });

  //   // Next month action
  //   $('#cal-next').on('click', function () {
  //     $('#calendar').fullCalendar('next');
  //   });

  //   // Change to month view
  //   $('#change-view-month').on('click', function () {
  //     $('#calendar').fullCalendar('changeView', 'month');

  //     // safari fix
  //     $('#content .main').fadeOut(0, function () {
  //       setTimeout(function () {
  //         $('#content .main').css({ 'display': 'table' });
  //       }, 0);
  //     });
  //   });

  //   // Change to week view
  //   $('#change-view-week').on('click', function () {
  //     $('#calendar').fullCalendar('changeView', 'agendaWeek');

  //     // safari fix
  //     $('#content .main').fadeOut(0, function () {
  //       setTimeout(function () {
  //         $('#content .main').css({ 'display': 'table' });
  //       }, 0);
  //     });


  //   });

  //   // Change to day view
  //   $('#change-view-day').on('click', function () {
  //     $('#calendar').fullCalendar('changeView', 'agendaDay');

  //     // safari fix
  //     $('#content .main').fadeOut(0, function () {
  //       setTimeout(function () {
  //         $('#content .main').css({ 'display': 'table' });
  //       }, 0);
  //     });

  //   });

  //   // Change to today view
  //   $('#change-view-today').on('click', function () {
  //     $('#calendar').fullCalendar('today');
  //   });

  //   /* initialize the external events
  //    -----------------------------------------------------------------*/
  //   $('#external-events .event-control').each(function () {

  //     // store data so the calendar knows to render an event upon drop
  //     $(this).data('event', {
  //       title: $.trim($(this).text()), // use the element's text as the event title
  //       stick: true // maintain when user navigates (see docs on the renderEvent method)
  //     });

  //     // make the event draggable using jQuery UI
  //     $(this).draggable({
  //       zIndex: 999,
  //       revert: true,      // will cause the event to go back to its
  //       revertDuration: 0  //  original position after the drag
  //     });

  //   });

  //   $('#external-events .event-control .event-remove').on('click', function () {
  //     $(this).parent().remove();
  //   });

  //   // Submitting new event form
  //   $('#add-event').submit(function (e) {
  //     e.preventDefault();
  //     const form = $(this);
  //     const newEvent = $('<div class="event-control p-10 mb-10">' + $('#event-title').val() + '<a class="pull-right text-muted event-remove"><i class="fa fa-trash-o"></i></a></div>');
       
  //     $('#external-events .event-control:last').after(newEvent);

  //     $('#external-events .event-control').each(function () {

  //       // store data so the calendar knows to render an event upon drop
  //       $(this).data('event', {
  //         title: $.trim($(this).text()), // use the element's text as the event title
  //         stick: true // maintain when user navigates (see docs on the renderEvent method)
  //       });

  //       // make the event draggable using jQuery UI
  //       $(this).draggable({
  //         zIndex: 999,
  //         revert: true,      // will cause the event to go back to its
  //         revertDuration: 0  //  original position after the drag
  //       });
  //     });

  //     $('#external-events .event-control .event-remove').on('click', function () {
  //       $(this).parent().remove();
  //     });

  //     form[0].reset();

  //     $('#cal-new-event').modal('hide');
  //   });
  // }
  
  // saveData(){
  //   let currentDate = <HTMLScriptElement>document.getElementsByName("txtCurrentDate")[0]; 
  //   let leaveName = <HTMLScriptElement>document.getElementsByName("selectLeaveName")[0];
  //   let leaveType = <HTMLScriptElement>document.getElementsByName("selectLeaveType")[0];
  //   let dateFrom = <HTMLScriptElement>document.getElementsByName("txtDateFrom")[0];
  //   let dateTo = <HTMLScriptElement>document.getElementsByName("txtDateTo")[0];
  //   let reason = <HTMLScriptElement>document.getElementsByName("reason")[0];

  //    this.JsonFileService.getJSONLeaveFiling({
  //      "LeaveId" : "A6BB0064-996D-4489-2FFA-08D6C7BF6EEF",
  //      "Consumed": leaveType.value,
  //      "DateFrom": dateFrom.value,
  //      "DateTo": dateTo.value,
  //      "Reason": reason.value,
  //      "UserId": "00000000-0000-0000-0000-000000000001"
  //    }).subscribe(leaveFilingData => {
  //       console.log(leaveFilingData);
  //    });


  //   console.log(currentDate.value);
  //   console.log(leaveName.value);
  //   console.log(leaveType.value);
  //   console.log(dateFrom.value);
  //   console.log(dateTo.value);
  //   console.log(reason.value)
  // }

  // viewFilingData(){


  //   this.JsonFileService.getJSONLeaveReqAndApp({
  //     "UserId": "00000000-0000-0000-0000-000000000001"
  //   }).subscribe(reqAppFilingData => {
  //     console.log(reqAppFilingData);
  //     console.log(reqAppFilingData.status);
  //   });
 }
 }
