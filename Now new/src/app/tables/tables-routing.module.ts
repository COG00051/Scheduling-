import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NormalTablesComponent} from './normal-tables/normal-tables.component';
import {JqueryDatatableComponent} from './jquery-datatable/jquery-datatable.component';
import {EditableTableComponent} from './editable-table/editable-table.component';
import {FootableComponent} from './footable/footable.component';
import {TableColorComponent} from './table-color/table-color.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'normal-tables',
        pathMatch: 'full'
    },
    {
        path: 'normal-tables',
        component: NormalTablesComponent
    },
    {
        path: 'jquery-datatable',
        component: JqueryDatatableComponent
    },
    {
        path: 'editable-table',
        component: EditableTableComponent
    },
    {
        path: 'footable',
        component: FootableComponent
    },
    {
        path: 'table-color',
        component: TableColorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
