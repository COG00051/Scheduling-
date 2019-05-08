import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { NormalTablesComponent } from './normal-tables/normal-tables.component';
import { JqueryDatatableComponent } from './jquery-datatable/jquery-datatable.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { FootableComponent } from './footable/footable.component';
import { TableColorComponent } from './table-color/table-color.component';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
  declarations: [
      NormalTablesComponent,
      JqueryDatatableComponent,
      EditableTableComponent,
      FootableComponent,
      TableColorComponent
  ]
})
export class TablesModule { }
