import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { DocsComponent } from './docs/docs.component';
import { FaqsComponent } from './faqs/faqs.component';

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule
  ],
  declarations: [
      DocsComponent,
      FaqsComponent
  ]
})
export class OverviewModule { }
