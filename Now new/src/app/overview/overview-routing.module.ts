import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocsComponent} from './docs/docs.component';
import {FaqsComponent} from './faqs/faqs.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'docs',
        pathMatch: 'full'
    },
    {
        path: 'docs',
        component: DocsComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
