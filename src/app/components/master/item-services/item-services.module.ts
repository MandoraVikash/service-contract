import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group/list/list.component';
import { GroupAddComponent } from './group/add/add.component';
import { SubGroupComponent } from './sub-group/sub-group.component';
import { SubGroupAddComponent } from './sub-group/add/add.component';
import { SubGroupListComponent } from './sub-group/list/list.component';
import { BrandComponent } from './brand/brand.component';
import { BrandListComponent } from './brand/list/list.component';
import { BrandAddComponent } from './brand/add/add.component';
import { ItemServiceRoutingModule } from './item-services-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HsnCodeComponent } from './hsn-code/hsn-code.component';
import { HsnCodeAddComponent } from './hsn-code/add/add.component';
import { HsnCodeListComponent } from './hsn-code/list/list.component';
import { HsnCodeEditComponent } from './hsn-code/edit/edit.component';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaxZoneComponent } from './tax-zone/tax-zone.component';
import { TaxZoneListComponent } from './tax-zone/list/list.component';
import { TaxZoneAddComponent } from './tax-zone/add/add.component';
import { TaxRateComponent } from './tax-rate/tax-rate.component';
import { TaxRateListComponent } from './tax-rate/list/list.component';
import { TaxRateAddComponent } from './tax-rate/add/add.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { WarrantyListComponent } from './warranty/list/list.component';
import { WarrantyAddComponent } from './warranty/add/add.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/list/list.component';
import { CategoryAddComponent } from './category/add/add.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item/list/list.component';
import { ItemAddComponent } from './item/add/add.component';
import { DurationTypeComponent } from './duration-type/duration-type.component';
import { DurationTypeListComponent } from './duration-type/list/list.component';
import { DurationTypeAddComponent } from './duration-type/add/add.component';



@NgModule({
  declarations: [
    GroupComponent,
    GroupListComponent,
    GroupAddComponent,

    SubGroupComponent,
    SubGroupAddComponent,
    SubGroupListComponent,

    BrandComponent,
    BrandListComponent,
    BrandAddComponent,

    HsnCodeComponent,
    HsnCodeAddComponent,
    HsnCodeListComponent,
    HsnCodeEditComponent,

    TaxZoneComponent,
    TaxZoneListComponent,
    TaxZoneAddComponent,

    TaxRateComponent,
    TaxRateListComponent,
    TaxRateAddComponent,

    WarrantyComponent,
    WarrantyListComponent,
    WarrantyAddComponent,
    
    CategoryComponent,
    CategoryListComponent,
    CategoryAddComponent,

    ItemComponent,
    ItemListComponent,
    ItemAddComponent,

    DurationTypeComponent,
    DurationTypeListComponent,
    DurationTypeAddComponent
  ],
  imports: [
    CommonModule,
    ItemServiceRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule
  ]
})
export class ItemServicesModule { }
