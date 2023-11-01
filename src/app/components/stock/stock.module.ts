import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrnEntryComponent } from './mrn-entry/mrn-entry.component';
import { MrnEntryListComponent } from './mrn-entry/list/list.component';
import { MrnEntryAddComponent } from './mrn-entry/add/add.component';
import { MrnReturnComponent } from './mrn-return/mrn-return.component';
import { MrnReturnListComponent } from './mrn-return/list/list.component';
import { MrnReturnAddComponent } from './mrn-return/add/add.component';
import { StockRoutingModule } from './stock-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MrnEntryComponent,
    MrnEntryListComponent,
    MrnEntryAddComponent,
    MrnReturnComponent,
    MrnReturnListComponent,
    MrnReturnAddComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class StockModule { }
