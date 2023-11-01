import { Component } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class WarrantyAddComponent {
  submitted :boolean
  addWarranty:FormGroup
 constructor(){
  this.submitted = false
  this.addWarranty = new FormGroup({
    durationType: new FormControl(null, Validators.required),
    basicInfo : new FormGroup({
      warranty: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
    });
 }
 duration=[
  {name:'Hours'},
  {name:'Days'},
  {name:'Weeks'},
  {name:'Months'},
  {name:'Years'},
 ]

  get a() { return this.addWarranty['controls']}
  get f() { return this.addWarranty.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted= true
    console.warn(this.addWarranty.value);
    if( this.addWarranty.invalid){
      return
    }
  }
}
