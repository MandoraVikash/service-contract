import { User } from "../user.model";
import { TaxRate } from "./tax-rate.model";

export interface HsnCode{
    hsnCodeId?: number,
    hsnCodeTitle: string,
    tax1: number,
    tax2: number,
    tax3: number,
    tax4: number,
    taxRateId: number,
 
     description?: string,
     isActive:boolean,
     addedBy?:User,
     addedDateTime?: Date,
     editedBy?: User,
     editedDateTime?: Date

     taxRate?: TaxRate
}