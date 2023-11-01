import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseListComponent } from './warehouse/list/list.component';
import { WarehouseAddComponent } from './warehouse/add/add.component';
import { WarehouseEditComponent } from './warehouse/edit/edit.component';
import { WarehouseViewComponent } from './warehouse/view/view.component';
import { AccountComponent } from "./account/account.component";
import { AccountListComponent } from "./account/list/list.component";
import { AccountAddComponent } from "./account/add/add.component";
import { EngineComponent } from './engine/engine.component';
import { EngineListComponent } from "./engine/list/list.component";
import { EngineAddComponent } from "./engine/add/add.component";


const routes: Routes = [

    {
        path: "warehouse", component: WarehouseComponent,
        children: [
            { path: "", component:     WarehouseListComponent, },
            { path: "add", component:  WarehouseAddComponent, },
            { path: "edit", component: WarehouseEditComponent, },
            { path: "view", component: WarehouseViewComponent, },
        ]
    },
    {
        path: "account", component: AccountComponent,
        children: [
            { path: "", component:     AccountListComponent, },
            { path: "add", component:  AccountAddComponent, },
        ]
    },
    {
        path: "engine", component: EngineComponent,
        children: [
            { path: "", component:     EngineListComponent, },
            { path: "add", component:  EngineAddComponent, },
        ]
    },
   
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule { }