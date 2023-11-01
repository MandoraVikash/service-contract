import { Component } from '@angular/core';
import { City } from 'src/app/shared/model/general/city.model'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CityListComponent {
  tableList: City[] = [
    { cityName: "Pali", cityCode: "20", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Rajasthan", stateCode: "20", isActive: true, country: { countryName: "India", countryCode: "", isActive: true }, }, },
    { cityName: "Jodhpur", cityCode: "38", isActive: false, stateId: 1, state: { countryId: 1, stateName: "Maharastra", stateCode: "38", isActive: false, country: { countryName: "India", countryCode: "", isActive: true } } },
    { cityName: "Ganganagar", cityCode: "19", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Haryana", stateCode: "19", isActive: true, country: { countryName: "India", countryCode: "", isActive: true } } },
    { cityName: "Sirohi", cityCode: "48", isActive: true, stateId: 1, state: { countryId: 1, stateName: "Punjab", stateCode: "48", isActive: true, country: { countryName: "India", countryCode: "", isActive: true } } },
  ];
}
