import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePagesRoutingModule } from './sample-pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    SamplePagesRoutingModule
  ],
  declarations: [
      ProfileComponent,
      BlankPageComponent,
      ImageGalleryComponent,
      TimelineComponent,
      PricingComponent,
      InvoiceComponent,
      SearchResultComponent
  ]
})
export class SamplePagesModule { }
