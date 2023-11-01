import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MrnEntryComponent } from "./mrn-entry/mrn-entry.component";
import { MrnEntryListComponent } from "./mrn-entry/list/list.component";
import { MrnEntryAddComponent } from "./mrn-entry/add/add.component";
import { MrnReturnComponent } from "./mrn-return/mrn-return.component";
import { MrnReturnListComponent } from "./mrn-return/list/list.component";


const routes: Routes = [
    {
        path: "mrn-entry", component: MrnEntryComponent,
        children: [
            { path: "", component: MrnEntryListComponent },
            { path: "add", component: MrnEntryAddComponent },
        ]
    },
    {
        path: "mrn-return", component: MrnReturnComponent,
        children: [
            { path: "", component: MrnReturnListComponent },
            { path: "add", component: MrnEntryAddComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StockRoutingModule { }