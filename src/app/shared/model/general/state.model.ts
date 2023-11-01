import { Country } from "./country.model";
import { User } from "../user.model";

export interface State{
   
    stateId?:number,
    countryId:number,
    stateName:string,
    stateCode:string,
    isActive:boolean,
    description?:string,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date

    country:Country,
}