import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class CapacityAddComponent {
  submitted :boolean 
  addCapacity:FormGroup
constructor(){
  this.submitted = false
  this.addCapacity = new FormGroup({
    basicInfo: new FormGroup({
      capacity: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
  });
}

  get f() {return this.addCapacity.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted = true
    console.log(this.addCapacity.value);
  }
}
