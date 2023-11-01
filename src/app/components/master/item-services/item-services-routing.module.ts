import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HsnCodeComponent } from './hsn-code/hsn-code.component';
import { HsnCodeListComponent } from './hsn-code/list/list.component';
import { HsnCodeAddComponent } from './hsn-code/add/add.component';
import { HsnCodeEditComponent } from './hsn-code/edit/edit.component';
import { HsnCodeViewComponent } from './hsn-code/view/view.component';
import { GroupComponent } from "./group/group.component";
import { GroupListComponent } from "./group/list/list.component";
import { GroupAddComponent } from "./group/add/add.component";
import { SubGroupComponent } from "./sub-group/sub-group.component";
import { SubGroupListComponent } from "./sub-group/list/list.component";
import { SubGroupAddComponent } from "./sub-group/add/add.component";
import { BrandComponent } from "./brand/brand.component";
import { BrandListComponent } from "./brand/list/list.component";
import { BrandAddComponent } from "./brand/add/add.component";
import { TaxRateComponent } from "./tax-rate/tax-rate.component";
import { TaxRateListComponent } from "./tax-rate/list/list.component";
import { TaxRateAddComponent } from "./tax-rate/add/add.component";
import { TaxZoneComponent } from "./tax-zone/tax-zone.component";
import { TaxZoneListComponent } from "./tax-zone/list/list.component";
import { TaxZoneAddComponent } from "./tax-zone/add/add.component";
import { WarrantyComponent } from "./warranty/warranty.component";
import { WarrantyListComponent } from "./warranty/list/list.component";
import { WarrantyAddComponent } from "./warranty/add/add.component";
import { CategoryComponent } from "./category/category.component";
import { CategoryListComponent } from "./category/list/list.component";
import { CategoryAddComponent } from "./category/add/add.component";
import { ItemComponent } from "./item/item.component";
import { ItemListComponent } from "./item/list/list.component";
import { ItemAddComponent } from "./item/add/add.component";
import { DurationTypeComponent } from "./duration-type/duration-type.component";
import { DurationTypeListComponent } from "./duration-type/list/list.component";
import { DurationTypeAddComponent } from "./duration-type/add/add.component";


const routes: Routes = [
    {
        path: "hsn-code", component: HsnCodeComponent,
        children: [
            { path: "", component: HsnCodeListComponent, },
            { path: "add", component: HsnCodeAddComponent, },
            { path: "edit", component: HsnCodeEditComponent, },
            { path: "view", component: HsnCodeViewComponent, },
        ]
    },
    {
        path: "group", component: GroupComponent,
        children: [
            { path: "", component:  GroupListComponent, },
            { path: "add", component:  GroupAddComponent, },
        ]
    },
    {
        path: "sub-group", component: SubGroupComponent,
        children: [
            { path: "", component:  SubGroupListComponent, },
            { path: "add", component:  SubGroupAddComponent, },
        ]
    },
    {
        path: "brand", component: BrandComponent,
        children: [
            { path: "", component:  BrandListComponent, },
            { path: "add", component:  BrandAddComponent, },
        ]
    },
    {
        path: "tax-rate", component: TaxRateComponent,
        children: [
            { path: "", component:  TaxRateListComponent, },
            { path: "add", component:  TaxRateAddComponent, },
        ]
    },
    {
        path: "tax-zone", component: TaxZoneComponent,
        children: [
            { path: "", component:  TaxZoneListComponent, },
            { path: "add", component:  TaxZoneAddComponent, },
        ]
    },
    {
        path: "warranty", component: WarrantyComponent,
        children: [
            { path: "", component:  WarrantyListComponent, },
            { path: "add", component:  WarrantyAddComponent, },
        ]
    },
    {
        path: "category", component: CategoryComponent,
        children: [
            { path: "", component:  CategoryListComponent, },
            { path: "add", component:  CategoryAddComponent, },
        ]
    },
    {
        path: "item", component: ItemComponent,
        children: [
            { path: "", component:  ItemListComponent, },
            { path: "add", component:  ItemAddComponent, },
        ]
    },
    {
        path: "duration-type", component: DurationTypeComponent,
        children: [
            { path: "", component:  DurationTypeListComponent, },
            { path: "add", component:  DurationTypeAddComponent, },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemServiceRoutingModule { }