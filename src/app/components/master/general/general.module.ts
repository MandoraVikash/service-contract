import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area/area.component';
import { AreaListComponent } from './area/list/list.component';
import { AreaAddComponent } from './area/add/add.component';
import { GenralRoutingModule } from './general-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CityComponent } from './city/city.component';
import { CityListComponent } from './city/list/list.component';
import { CityAddComponent } from './city/add/add.component';
import { StateComponent } from './state/state.component';
import { StateListComponent } from './state/list/list.component';
import { StateAddComponent } from './state/add/add.component';
import { MakeComponent } from './make/make.component';
import { MakeAddComponent } from './make/add/add.component';
import { MakeListComponent } from './make/list/list.component';
import { MakeEditComponent } from './make/edit/edit.component';
import { MakeViewComponent } from './make/view/view.component';
import { ModelComponent } from './model/model.component';
import { ModelAddComponent } from './model/add/add.component';
import { ModelListComponent } from './model/list/list.component';
import { ModelEditComponent } from './model/edit/edit.component';
import { ModelViewComponent } from './model/view/view.component';
import { CapacityComponent } from './capacity/capacity.component';
import { CapacityListComponent } from './capacity/list/list.component';
import { CapacityAddComponent } from './capacity/add/add.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
     
    AreaComponent,
    AreaListComponent,
    AreaAddComponent,

    CityComponent,
    CityListComponent,
    CityAddComponent,

    StateComponent,
    StateListComponent,
    StateAddComponent,

    MakeComponent,
    MakeAddComponent,
    MakeListComponent,
    MakeEditComponent,
    MakeViewComponent,
      
    ModelComponent,
    ModelAddComponent,
    ModelListComponent,
    ModelEditComponent,
    ModelViewComponent,

    CapacityComponent,
    CapacityListComponent,
    CapacityAddComponent,

  ],
  imports: [
    CommonModule,
    GenralRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgSelectModule
  ]
})
export class GeneralModule { }
