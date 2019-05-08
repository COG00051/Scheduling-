import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { RtlComponent } from './rtl/rtl.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { SmallMenuComponent } from './small-menu/small-menu.component';

@
NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  declarations: [MainComponent, RtlComponent, HorizontalComponent, SmallMenuComponent]
})
export class DashboardModule { }
