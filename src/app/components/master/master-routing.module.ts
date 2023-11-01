import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { UserComponent } from "./user/user.component"
import { UserListComponent } from "./user/list/list.component"
import { UserAddComponent } from "./user/add/add.component"
import { RolesComponent } from "./roles/roles.component"
import { RolesListComponent } from "./roles/list/list.component"
import { RolesAddComponent } from "./roles/add/add.component"

const routes: Routes = [
    {
        path: "user", component: UserComponent,
        children: [
            { path: "", component: UserListComponent, },
            { path: "add", component: UserAddComponent, }
        ]
    },  
    {
        path: "roles", component: RolesComponent,
        children: [
            { path: "", component: RolesListComponent, },
            { path: "add", component: RolesAddComponent, }
        ]
    },  
   
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule { }