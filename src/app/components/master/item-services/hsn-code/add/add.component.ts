import { Component } from '@angular/core';
import { FormControl ,  FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class HsnCodeAddComponent {
  submitted:boolean
  addHsnCode:FormGroup
  constructor(){
    this.submitted = false
    this.addHsnCode = new FormGroup({
      rate: new FormControl(null, [Validators.required]),
      basicInfo: new FormGroup({
        hsnCode: new FormControl('' , [Validators.required]),
        tax1: new FormControl('', [Validators.required]),
        tax2: new FormControl('', [Validators.required]),
        tax3: new FormControl(''),
        tax4: new FormControl(''),
        switch: new FormControl(true),
    
      })
      });
  }
  rate=[
    {name:'12%'},
    {name:'18%'},
    {name:'28%'},
  ]
 

  get a() { return this.addHsnCode['controls']}
  get f() { return this.addHsnCode.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted = true
    console.warn(this.addHsnCode.value);
    if(this.addHsnCode.invalid){
      return
    }
  }
}
