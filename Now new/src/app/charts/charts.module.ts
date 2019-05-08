import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { MorrisComponent } from './morris/morris.component';
import { FlotComponent } from './flot/flot.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SparklinesComponent } from './sparklines/sparklines.component';
import { JqueryKnobComponent } from './jquery-knob/jquery-knob.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  declarations: [
      MorrisComponent,
      FlotComponent,
      ChartjsComponent,
      SparklinesComponent,
      JqueryKnobComponent
  ]
})
export class ChartsModule { }
