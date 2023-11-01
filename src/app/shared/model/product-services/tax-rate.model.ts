import { User } from "../user.model";

export interface TaxRate {
    taxRateId?: number,
    taxRateTitle: string,
    rate: string,
 
     description?: string,
     isActive:boolean,
     addedBy?:User,
     addedDateTime?: Date,
     editedBy?: User,
     editedDateTime?: Date
}