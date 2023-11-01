import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class WarehouseAddComponent {
  submitted: boolean
  addWarehouse: FormGroup
  constructor() {
    this.submitted = false
    this.addWarehouse = new FormGroup({
      area: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      basicInfo: new FormGroup({
        title: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        switch: new FormControl(true),
      })
    });
  }
  get a() { return this.addWarehouse.controls}
  get f() { return this.addWarehouse.get('basicInfo')['controls'] }
  onSubmit() {
    this.submitted = true
    console.warn(this.addWarehouse.value);
    if (this.addWarehouse.invalid) { return }
  }
  state=[
    {name:'Rajasthan'},
    {name:'Gujrat'},
    {name:'Delhi'},
    {name:'Panjab'},
    {name:'Mumbai'},
  ]
  area=[
    {name:'Bali'},
    {name:'Desuri'},
    {name:'Jaitaran'},
    {name:'Marwar Junction'},
    {name:'Pali'},
    {name:'Rani'},
    {name:'Raipur'},
    {name:'Rohat'},
    {name:'Sojat'},
    {name:'Sumerpur'},
  ]
  // , , , , , , , ,  and .
  city=[
    {name:'Ajmer'},
    {name:'Ahemdabad'},
    {name:'Alwar'},
    {name:'Bharatpur'},
    {name:'Jaipur'},
    {name:'Jodhpur'},
    {name:'Pali'},
    {name:'Surat'},
  ]
}
