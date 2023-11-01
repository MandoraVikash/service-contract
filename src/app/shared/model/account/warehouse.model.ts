import { User } from "../user.model";
import { Area } from '../general/area.model';
import { City } from "../general/city.model";
import { State } from "../general/state.model";

export interface Warehouse{

    warehouseId?: number,
    warehouseName: string,
    address?:string,
    areaId: number,
    area?: Area
    cityId: number,
    city?: City,
    stateId: number,
    state?: State

    description?: string,
    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date
}