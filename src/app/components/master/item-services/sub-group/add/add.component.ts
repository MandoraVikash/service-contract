import { Component } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class SubGroupAddComponent {
  submitted :boolean
  addGroup:FormGroup
 constructor(){
  this.submitted = false
  this.addGroup = new FormGroup({
    group: new FormControl(null, Validators.required),
    basicInfo : new FormGroup({
      subgroupName: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
    });
 }

  get a() { return this.addGroup['controls']}
  get f() { return this.addGroup.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted= true
    console.warn(this.addGroup.value);
    if( this.addGroup.invalid){
      return
    }
  }

  group=[
    {name:'Group A'},
    {name:'Group B'},
    {name:'Group C'},
  ]
}
