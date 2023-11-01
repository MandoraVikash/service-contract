import { Component } from '@angular/core';
import { Area } from 'src/app/shared/model/general/area.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AreaListComponent {
  tableList: Area[] = [
    { areaName: "Sojat", areaCode: "20", isActive: true, pincode: 306104, cityId: 123, city: { cityName: "Pali", cityCode: "20", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country: { countryName: "India", countryCode: "", isActive: true } } }, },
    { areaName: "Pali", areaCode: "38", isActive: true, pincode: 306401, cityId: 123, city: { cityName: "Jodhpur", cityCode: "38", isActive: false, stateId: 1, state: { countryId: 1, stateName: "Maharastra", stateCode: "38", isActive: false, country: { countryName: "India", countryCode: "", isActive: true } } }, },
    { areaName: "Jaitaran", areaCode: "19", isActive: false, pincode: 306302, cityId: 123, city: { cityName: "Ganganagar", cityCode: "19", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Haryana", stateCode: "19", isActive: true, country: { countryName: "India", countryCode: "", isActive: true } } }, },
    { areaName: "Pali", areaCode: "48", isActive: false, pincode: 306401, cityId: 123, city: { cityName: "Sirohi", cityCode: "48", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Punjab", stateCode: "48", isActive: true, country: { countryName: "India", countryCode: "", isActive: true } } }, },
  ];
}
