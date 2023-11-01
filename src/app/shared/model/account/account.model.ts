import { User } from "../user.model"
import { Area } from '../general/area.model';
import { City } from "../general/city.model";
import { State } from "../general/state.model";
import { Country } from '../general/country.model';
import { TaxZone } from '../product-services/tax-zone.model';

export interface Account {
    accountId?: number,
    companyId?: string,
    yearId?: string,
    accountName: string,
    accountGroup: string,
    contactPerson: string,
    contactNo: number,
    addressLine1: string,
    addressLine2?: string,
    areaId: number,
    cityId: number,
    stateId: number,
    countryId: number,
    pincode: number,
    phoneNo?: number,
    mobileNo?: number,
    email?: string,
    gstNo?: string,
    pan?: string,
    taxZoneId: number,
    type?: string,
    description?: string,
    isActive: boolean,
    addedBy?: User,
    addedDateTime?: Date,
    editedBy?: User,
    editedDateTime?: Date,
    area?: Area,
    city?: City,
    state?: State,
    country?: Country,
    taxZone?:TaxZone,

}


