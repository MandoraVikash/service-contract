import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class BrandAddComponent {
  submitted :boolean
  addBrand:FormGroup
 constructor(){
  this.submitted = false
  this.addBrand = new FormGroup({
    basicInfo : new FormGroup({
      brandName: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
    });
 }

  get f() { return this.addBrand.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted= true
    console.warn(this.addBrand.value);
    if( this.addBrand.invalid){
      return
    }
  }
}
