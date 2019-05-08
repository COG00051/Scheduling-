import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleComponent } from './google/google.component';
import { JvectormapComponent } from './jvectormap/jvectormap.component';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
  declarations: [
      GoogleComponent,
      JvectormapComponent
  ]
})
export class MapsModule { }
