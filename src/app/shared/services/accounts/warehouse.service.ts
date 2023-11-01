import { Injectable } from '@angular/core';
import { Warehouse } from '../../model/account/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  
  warehouse: Warehouse[] = [
    { warehouseId: 1, warehouseName: "Dharm Honda Godown",  address: "sashtri nagar", cityId:1,areaId:2,stateId:1,isActive:true, city:{ cityName: "Pali", cityCode: "20", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country: { countryName: "India", countryCode: "", isActive: true }, }, },state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country:{ countryName: "India", countryCode: "", isActive: true },},},
    { warehouseId: 1, warehouseName: "Jay Honda Godown",  address: "Govind nagar", cityId:1,areaId:2,stateId:1,isActive:true, city:{ cityName: "Pali", cityCode: "20", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country: { countryName: "India", countryCode: "", isActive: true }, }, },state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country:{ countryName: "India", countryCode: "", isActive: true },},},
    { warehouseId: 1, warehouseName: "Shree Honda Godown",  address: "Shreedevi nagar", cityId:1,areaId:2,stateId:1,isActive:true, city:{ cityName: "Pali", cityCode: "20", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country: { countryName: "India", countryCode: "", isActive: true }, }, },state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country:{ countryName: "India", countryCode: "", isActive: true },},},
    { warehouseId: 1, warehouseName: "Ajay Honda Godown",  address: "Gandhi colony", cityId:1,areaId:2,stateId:1,isActive:true, city:{ cityName: "Pali", cityCode: "20", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country: { countryName: "India", countryCode: "", isActive: true }, }, },state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country:{ countryName: "India", countryCode: "", isActive: true },},},
     ];

     getAllWarehouse(){
      return this.warehouse.slice();
     }

  constructor() { }
}
