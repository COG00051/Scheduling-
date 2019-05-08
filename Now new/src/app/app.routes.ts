import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimeClockComponent } from './timeclock/timeclock.component';
import { TimeRecordsComponent } from './timerecords/timerecords.component';
import { LeaveManagementComponent } from './leavemanagement/leavemanagement.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { AppComponent } from './app.component';
//import { AuthorizationGuard } from './authorization.guard';
//import { AuthorizationCanGuard } from './authorization.can.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


const routes: Routes = [
  {
    path: '',
      //component: HomeComponent,
      //canActivate: [AuthorizationGuard],
      //canLoad: [AuthorizationCanGuard],
    children: [
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'timeclock',
        component: TimeClockComponent,
      },
      {
        path: 'timerecords',
        component: TimeRecordsComponent,
      },
      {
        path: 'leavemanagement',
        component: LeaveManagementComponent,
      },
      {
        path: 'scheduling',
        component: SchedulingComponent,
      },
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
      },
      {
        path: 'app',
        loadChildren: 'app/app/app.module#AppModule'
      },
      {
        path: 'timerecords',
        component: TimeRecordsComponent,
      },
      {
        path: 'user-interface',
        loadChildren: 'app/user-interface/user-interface.module#UserInterfaceModule'
      },
      {
        path: 'widgets',
        loadChildren: 'app/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'forms',
        loadChildren: 'app/forms/forms.module#FormsModule'
      },
      {
        path: 'tables',
        loadChildren: 'app/tables/tables.module#TablesModule'
      },
      {
        path: 'charts',
        loadChildren: 'app/charts/charts.module#ChartsModule'
      },
      {
        path: 'maps',
        loadChildren: 'app/maps/maps.module#MapsModule'
      },
      {
        path: 'authentication',
        loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
      },
      {
        path: 'sample-pages',
        loadChildren: 'app/sample-pages/sample-pages.module#SamplePagesModule'
      },
      {
        path: 'overview',
        loadChildren: 'app/overview/overview.module#OverviewModule'
      }

    ]
  },
  { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
