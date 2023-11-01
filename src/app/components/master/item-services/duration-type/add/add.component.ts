import { Component } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class DurationTypeAddComponent {
  submitted :boolean
  addDuration:FormGroup
 constructor(){
  this.submitted = false
  this.addDuration = new FormGroup({
    basicInfo : new FormGroup({
      warranty: new FormControl('', Validators.required),
      days: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
    });
 }

  get f() { return this.addDuration.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted= true
    console.warn(this.addDuration.value);
    if( this.addDuration.invalid){
      return
    }
  }
}
