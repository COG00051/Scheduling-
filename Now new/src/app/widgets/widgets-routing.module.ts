import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppWidgetsComponent } from './app-widgets/app-widgets.component';
import { DataWidgetsComponent } from './data-widgets/data-widgets.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'widgets-app',
        pathMatch: 'full'
    },
    {
        path: 'widgets-app',
        component: AppWidgetsComponent
    },
    {
        path: 'widgets-data',
        component: DataWidgetsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
