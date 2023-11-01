import { User } from '../user.model';
export  interface Country{
    countryId?:number ,
    countryName:string,
    countryCode:string,
    description?:string,
    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
}