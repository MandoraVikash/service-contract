import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class StateAddComponent {
  submitted:boolean
  
  addState: FormGroup
  constructor () {
this.submitted = false
    this.addState = new FormGroup({
      country: new FormControl(null, Validators.required),
      basicInfo: new FormGroup({
        stateName: new FormControl('', Validators.required),
        stateCode: new FormControl('', Validators.required),
        description: new FormControl(''),
        switch: new FormControl(true),
      })
    });
  }
  country=[
    {name:'India'},
    {name:'Australia'},
    {name:'Russia'},
    {name:'New Zealand'},
    {name:'England'},
    {name:'Sri Lanka'},
  ]
  get a() { return this.addState['controls'] }
  get f() { return this.addState.get('basicInfo')['controls'] }

  onSubmit() {
    this.submitted = true
    console.warn(this.addState.value);
    if (this.addState.invalid) {
      return
    }
  }
}
