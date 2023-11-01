import { User } from "../user.model";

export interface TaxZone{
   taxZoneId?: number,
   taxZoneTitle: string,
   type: string,

    description?: string,
    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
}