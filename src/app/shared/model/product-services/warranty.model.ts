import { User } from "../user.model";

export interface Warranty{
    warrantyId?: number,
    warrantyTitle: string,
    
    description?: string,
    durationTypeId: number,
    duration:number,
    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
}