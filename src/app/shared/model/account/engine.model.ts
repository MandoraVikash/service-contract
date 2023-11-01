import { Make } from '../general/make.model';
import { Model } from '../general/model.model';
import { Capacity } from '../general/capcity.model';
import { User } from '../user.model';
export interface Engine{
    engineId?: number,
    yearId?: number,
    companyId?: number,
    chassisNo: string,
    makeId: number,
    make?: Make
    modelId:number,
    model?: Model,
    capacityId: number,
    capacity?: Capacity,
    manufacturingYear: number,
    manufacturingMonth: number,

    isActive:boolean,
    addedBy?:User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date


}