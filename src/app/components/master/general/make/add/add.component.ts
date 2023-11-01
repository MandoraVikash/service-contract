import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class MakeAddComponent {
  submitted :boolean
  addMake:FormGroup
 constructor(){
  this.submitted = false
  this.addMake = new FormGroup({
    basicInfo : new FormGroup({
      makeName: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
    });
 }

  get f() { return this.addMake.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted= true
    console.warn(this.addMake.value);
    if( this.addMake.invalid){
      return
    }
  }
}
