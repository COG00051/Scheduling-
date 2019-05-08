import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MorrisComponent} from './morris/morris.component';
import {JqueryKnobComponent} from './jquery-knob/jquery-knob.component';
import {SparklinesComponent} from './sparklines/sparklines.component';
import {ChartjsComponent} from './chartjs/chartjs.component';
import {FlotComponent} from './flot/flot.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'morris',
        pathMatch: 'full'
    },
    {
        path: 'morris',
        component: MorrisComponent
    },
    {
        path: 'flot',
        component: FlotComponent
    },
    {
        path: 'chartjs',
        component: ChartjsComponent
    },
    {
        path: 'sparklines',
        component: SparklinesComponent
    },
    {
        path: 'jquery-knob',
        component: JqueryKnobComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
