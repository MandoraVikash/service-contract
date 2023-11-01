import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class TaxRateAddComponent {
  submitted :boolean
  addTaxRate:FormGroup
 constructor(){
  this.submitted = false
  this.addTaxRate = new FormGroup({
    basicInfo : new FormGroup({
      taxrate: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
    });
 }

  get f() { return this.addTaxRate.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted= true
    console.warn(this.addTaxRate.value);
    if( this.addTaxRate.invalid){
      return
    }
  }
}
