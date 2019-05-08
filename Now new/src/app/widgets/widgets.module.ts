import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { AppWidgetsComponent } from './app-widgets/app-widgets.component';
import { DataWidgetsComponent } from './data-widgets/data-widgets.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule
  ],
  declarations: [AppWidgetsComponent, DataWidgetsComponent]
})
export class WidgetsModule { }
