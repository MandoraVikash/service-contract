import { User } from "../user.model";

export interface Capacity{

    capcityId?:number,
    capcityName:string,
    isActive:boolean,
    description?:string,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
}