import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {HorizontalComponent} from './horizontal/horizontal.component';
import {RtlComponent} from './rtl/rtl.component';
import {SmallMenuComponent} from './small-menu/small-menu.component';

const routes: Routes = [
    {
        path: '',
        // component: MainComponent
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'horizontal',
        component: HorizontalComponent
    },
    {
        path: 'rtl',
        component: RtlComponent
    },
    {
        path: 'small-menu',
        component: SmallMenuComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
