import { User } from "../user.model";
import { Make } from './make.model';

export interface Model{
    modelId?:number,
    modelName:string,
    isActive:boolean,
    description?:string,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
    makeId:number,

    make:Make
}