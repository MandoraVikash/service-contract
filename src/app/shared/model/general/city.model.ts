import { Country } from "./country.model";
import { State } from "./state.model";
import { User } from "../user.model";

export interface City{
    cityId?:number,
    cityName:string,
    cityCode:string,
    isActive:boolean,
    description?:string,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
    
    countryId?:number,
    stateId:number,
    country?: Country
    state?:State,
}