import { User } from "../user.model";

export interface Brand {
    brandId?: number,
    brandName: string,

    description?: string,
    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
}