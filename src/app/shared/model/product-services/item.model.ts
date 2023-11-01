import { User } from "../user.model";
import { Brand } from "./brand.model";
import { Category } from "./category.model";
import { Group } from './group.model';
import { HsnCode } from "./hsn-code.model";
import { Subgroup } from "./sub-group.model";
import { Warranty } from "./warranty.model";

export interface Item {
    itemId?: number,
    itemCode: string,
    itemType: string,
    oemCode?: string,
    itemName: string,
    categoryId: number,
    category?: Category,
    groupId: number,
    group?: Group,
    subgroupId?: number,
    subgroup?: Subgroup,
    brandId?: number,
    brand?: Brand,
    warratyId?: number,
    warranty?: Warranty,
    unit: string,
    hsnCodeId: number,
    hsnCode: HsnCode,
    tax1: number,
    tax2: number,
    tax3?: number,
    tax4?: number,
    dealerPrice: number,
    rate: number,
    mrp: number,
    description?: string,
    isActive: boolean

    addedBy?: User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date

}