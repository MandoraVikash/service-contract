import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class CityAddComponent {
  submitted:boolean
addCity:FormGroup
  constructor() {
    this.submitted =  false
    this.addCity = new FormGroup({
      state: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      basicInfo: new FormGroup({
        cityName: new FormControl('', Validators.required),
        description: new FormControl(''),
        switch: new FormControl(true),
      })
    });
  }

  get a() { return this.addCity['controls'] }
  get f() { return this.addCity.get('basicInfo')['controls'] }

  onSubmit() {
    this.submitted = true
    console.warn(this.addCity.value);
    if (this.addCity.invalid) {
      return
    }
  }

  state=[
    {name:'Rajasthan'},
    {name:'Gujrat'},
    {name:'Delhi'},
    {name:'Panjab'},
    {name:'Mumbai'},
  ]

  country=[
    {name:'India'},
    {name:'Australia'},
    {name:'Russia'},
    {name:'New Zealand'},
    {name:'England'},
    {name:'Sri Lanka'},
  ]
  // State: State[] = [
  //   { id: "1", code: "", state_name: "Rajasthan", status: true, description: "", country: { id: "", code: "", country_name: "India" } },
  //   { id: "2", code: "", state_name: "Gujrat", status: true, description: "", country: { id: "", code: "", country_name: "India" } },
  //   { id: "3", code: "", state_name: "Delhi", status: true, description: "", country: { id: "", code: "", country_name: "India" } },
  //   { id: "4", code: "", state_name: "Panjab", status: true, description: "", country: { id: "", code: "", country_name: "India" } },
  //   { id: "5", code: "", state_name: "Mumbai", status: true, description: "", country: { id: "", code: "", country_name: "India" } },
  // ];
}
