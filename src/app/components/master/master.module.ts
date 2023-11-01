import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MasterRoutingModule } from './master-routing.module';
import { UserAddComponent } from './user/add/add.component';
import { UserListComponent } from './user/list/list.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from "angular-datatables";
import { NgSelectModule } from '@ng-select/ng-select';
import { RolesComponent } from './roles/roles.component';
import { RolesAddComponent } from './roles/add/add.component';
import { RolesListComponent } from './roles/list/list.component';

@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent,
    UserListComponent,
    RolesComponent,
    RolesAddComponent,
    RolesListComponent,
    
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule

  ]
})
export class MasterModule { }
