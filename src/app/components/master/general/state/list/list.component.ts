import { Component } from '@angular/core';
import {State} from 'src/app/shared/model/general/state.model'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class StateListComponent {
  tableList:State[] = [
    { countryId:1, stateName:"Rajasthan",stateCode:"20",isActive:true, country:{countryName:"India",countryCode:"", isActive:true} },
    { countryId:1, stateName:"Maharastra",stateCode:"38",isActive:false, country:{countryName:"India",countryCode:"", isActive:true} },
    { countryId:1, stateName:"Haryana",stateCode:"19",isActive:true, country:{countryName:"India",countryCode:"", isActive:true} },
    { countryId:1, stateName:"Punjab",stateCode:"48",isActive:true, country:{countryName:"India",countryCode:"", isActive:true} },
  ];
}
