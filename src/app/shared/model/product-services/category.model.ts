import { User } from "../user.model";

export interface Category {
    categoryId?: number,
    categoryName: string,

    description?: string,
    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date

}