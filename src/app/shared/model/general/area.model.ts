import { User } from '../user.model';
import { City } from './city.model';
export interface Area{

    areaId?:number,
    areaName:string,
    areaCode:string,
    isActive:boolean,
    pincode:number;
    description?:string,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date

    cityId: number,
    city?:City
    
}