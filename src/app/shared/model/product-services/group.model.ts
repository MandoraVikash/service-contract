import { User } from "../user.model";

export interface Group {

    groupId?:number,
    groupName:string,
    isActive:boolean,
    description?:string,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date

}