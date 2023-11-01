import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class CategoryAddComponent {
  submitted :boolean
  addCategory:FormGroup
 constructor(){
  this.submitted = false
  this.addCategory = new FormGroup({
    basicInfo : new FormGroup({
      categoryName: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
    });
 }

  get f() { return this.addCategory.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted= true
    console.warn(this.addCategory.value);
    if( this.addCategory.invalid){
      return
    }
  }
}
