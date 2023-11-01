import { User } from "../user.model";

export interface Make{

    makeId?:number,
    makeName:string,
    isActive:boolean,
    description?:string,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
}