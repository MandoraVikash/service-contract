import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Make } from 'src/app/shared/model/general/make.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ModelAddComponent {

  // MakeArr:Make[]=[
  //   {id:"345654",make_name:"Mahindra"},
  //   {id:"854562",make_name:"Hero"},
  //   {id:"541154",make_name:"Mahindra"},
  //   {id:"548545",make_name:"Ashok Leyland"},
  //   {id:"865232",make_name:"Honda"},
  // ]
  submitted :boolean 
  addModel:FormGroup
constructor(){
  this.submitted = false
  this.addModel = new FormGroup({
    makeName: new FormControl(null, Validators.required),
    basicInfo: new FormGroup({
      modelName: new FormControl('', Validators.required),
      description: new FormControl(''),
      switch: new FormControl(true),
    })
  });
}
 make:Make[]=[
    {makeId:1,makeName:"Make A",isActive:true},
    {makeId:2,makeName:"Make B",isActive:true},
    {makeId:3,makeName:"Meke C",isActive:true},
    {makeId:4,makeName:"Meke D",isActive:true},
  ];
  
  get a() {return this.addModel['controls']}
  get f() {return this.addModel.get('basicInfo')['controls']}

  onSubmit() {
    this.submitted = true
    console.log(this.addModel.value);
  }
}
