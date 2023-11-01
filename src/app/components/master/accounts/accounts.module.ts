import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AccountListComponent } from './account/list/list.component';
import { AccountAddComponent } from './account/add/add.component';
import { EngineAddComponent } from './engine/add/add.component';
import { EngineListComponent } from './engine/list/list.component';
import { EngineEditComponent } from './engine/edit/edit.component';
import { EngineViewComponent } from './engine/view/view.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseAddComponent } from './warehouse/add/add.component';
import { WarehouseListComponent } from './warehouse/list/list.component';
import { WarehouseEditComponent } from './warehouse/edit/edit.component';
import { WarehouseViewComponent } from './warehouse/view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { EngineComponent } from './engine/engine.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent,
    AccountAddComponent,

    EngineComponent,
    EngineAddComponent,
    EngineListComponent,
    EngineEditComponent,
    EngineViewComponent,

     
    WarehouseComponent,
    WarehouseAddComponent,
    WarehouseListComponent,
    WarehouseEditComponent,
    WarehouseViewComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgSelectModule
  ]
})
export class AccountsModule { }
