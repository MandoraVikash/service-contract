import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class TaxZoneAddComponent {
  submitted :boolean
  addTaxZone:FormGroup
 constructor(){
  this.submitted = false
  this.addTaxZone = new FormGroup({
    basicInfo : new FormGroup({
      taxzone: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
    });
 }

  get f() { return this.addTaxZone.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted= true
    console.warn(this.addTaxZone.value);
    if( this.addTaxZone.invalid){
      return
    }
  }
}
