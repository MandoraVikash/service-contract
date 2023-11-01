import { User } from "../user.model";
import { Group } from "./group.model";

export interface Subgroup {
    subgroupId?:number,
    groupId?:number,
    subgroupName:string,
    description?:string,
    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date

    group?: Group
}