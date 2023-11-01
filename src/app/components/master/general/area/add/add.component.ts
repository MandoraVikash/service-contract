import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/shared/model/general/city.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AreaAddComponent {
  submitted: boolean

  addArea: FormGroup
  constructor() {
    this.submitted = false
    this.addArea = new FormGroup({
      city: new FormControl(null, Validators.required),
      basicInfo: new FormGroup({
        areaName: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required),
        description: new FormControl(''),
        switch: new FormControl(true),
      })
    });
  }

  get a() { return this.addArea['controls'] }
  get f() { return this.addArea.get('basicInfo')['controls'] }

  onSubmit() {
    this.submitted = true
    console.warn(this.addArea.value);
    if (this.addArea.invalid) {
      return
    }
  }
city=[
  {name:'Pali'},
  {name:'Surat'},
  {name:'Mumbai'},
]

  // City: City[] = [
  //   { cityId: 44,cityCode:'', cityName: "Pali", description: "", isActive: true, state: { stateId: 1, stateCode: "", stateName: "Rajasthan", isActive: true, description: "", country: { countryId: 91, countryCode: "", countryName: "", isActive: true } } },
  //   { cityId: 44,cityCode:'', cityName: "Surat", description: "", isActive: true, state: { stateId: 1, stateCode: "", stateName: "Gujrat", isActive: true, description: "", country: { countryId: 91, countryCode: "", countryName: "", isActive: true } } },
  //   { cityId: 44,cityCode:'', cityName: "Mumbai", description: "", isActive: true, state: { stateId: 1, stateCode: "", stateName: "Maharastra", isActive: true, description: "", country: { countryId: 92, countryCode: "", countryName: "", isActive: true } } },
  // ]
}
