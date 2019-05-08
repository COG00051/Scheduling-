import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {BlankPageComponent} from './blank-page/blank-page.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {PricingComponent} from './pricing/pricing.component';
import {TimelineComponent} from './timeline/timeline.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: 'blank-page',
        component: BlankPageComponent
    },
    {
        path: 'image-gallery',
        component: ImageGalleryComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'timeline',
        component: TimelineComponent
    },
    {
        path: 'pricing',
        component: PricingComponent
    },
    {
        path: 'invoice',
        component: InvoiceComponent
    },
    {
        path: 'search-result',
        component: SearchResultComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePagesRoutingModule { }
