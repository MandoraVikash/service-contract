import { User } from "../user.model";

export interface DurationType {
    durationTypeId?: number,
    durationTypeTitle: string,

    description?: string,
    days:number,
    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date

}