import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { AreaListComponent } from './area/list/list.component';
import { AreaAddComponent } from './area/add/add.component';
import { CityComponent } from './city/city.component';
import { CityListComponent } from './city/list/list.component';
import { CityAddComponent } from './city/add/add.component';
import { StateComponent } from './state/state.component';
import { StateListComponent } from './state/list/list.component';
import { StateAddComponent } from './state/add/add.component';
import { MakeComponent } from './make/make.component';
import { MakeListComponent } from './make/list/list.component';
import { MakeViewComponent } from './make/view/view.component';
import { MakeEditComponent } from './make/edit/edit.component';
import { MakeAddComponent } from './make/add/add.component';
import { ModelComponent } from './model/model.component';
import { ModelListComponent } from './model/list/list.component';
import { ModelAddComponent } from './model/add/add.component';
import { ModelEditComponent } from './model/edit/edit.component';
import { ModelViewComponent } from './model/view/view.component';
import { CapacityComponent } from './capacity/capacity.component';
import { CapacityListComponent } from './capacity/list/list.component';
import { CapacityAddComponent } from './capacity/add/add.component';


const routes: Routes = [
    {
        path: "area", component: AreaComponent, children: [
            { path: "", component: AreaListComponent },
            { path: "add", component: AreaAddComponent }
        ]
    },
    {
        path: "city", component: CityComponent,
        children: [
            { path: "", component: CityListComponent, },
            { path: "add", component: CityAddComponent, }
        ]
    },

    {
        path: "state", component: StateComponent,
        children: [
            { path: "", component: StateListComponent, },
            { path: "add", component: StateAddComponent, }
        ]
    },
    {
        path: "make", component: MakeComponent,
        children: [
            { path: "", component: MakeListComponent, },
            { path: "add", component: MakeAddComponent, },
            { path: "edit", component: MakeEditComponent, },
            { path: "view", component: MakeViewComponent, },
        ]
    },
    {
        path: "model", component: ModelComponent,
        children: [
            { path: "", component: ModelListComponent, },
            { path: "add", component: ModelAddComponent, },
            { path: "edit", component: ModelEditComponent, },
            { path: "view", component: ModelViewComponent, },
        ]
    },
    {
        path: "capacity", component: CapacityComponent,
        children: [
            { path: "", component: CapacityListComponent, },
            { path: "add", component: CapacityAddComponent, }
        ]
    },

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenralRoutingModule { }