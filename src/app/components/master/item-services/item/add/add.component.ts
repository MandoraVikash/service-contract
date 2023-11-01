import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Make} from 'src/app/shared/model/general/make.model'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ItemAddComponent {
  submitted = false;

  // make:Make[]=[
  //   {makeId:1,makeName:"Honda",isActive:true},
  //   {makeId:2,makeName:"Hero",isActive:true},
  //   {makeId:3,makeName:"Mahindra",isActive:true},
  //   {makeId:4,makeName:"Ashok LeyLand",isActive:true},
  // ];
  brand=[
    {brandName:"Brand A"},
    {brandName:"Brand B"},
    {brandName:"Brand C"},
    {brandName:"Brand D"},
  ]
  item_type = [
    {type_name:'Goods'},
    {type_name:'Service'},
  ]

  category=[
    {name:'Category A'},
    {name:'Category B'},
    {name:'Category C'},
  ]
  
  group=[
    {name:'Group A'},
    {name:'Group B'},
    {name:'Group C'},
  ]
  subgroup=[
    {name:'Sub Group A'},
    {name:'Sub Group B'},
    {name:'Sub Group C'},
    {name:'Sub Group D'},
    {name:'Sub Group A2'},
    {name:'Sub Group B2'},
    {name:'Sub Group C2'},
    {name:'Sub Group D2'},
    {name:'Sub Group Z'},
  ]
  hsnCode=[
    {name:'8708'},
    {name:'8701'},
    {name:'8702'},
    {name:'8703'},
    {name:'8704'},
    {name:'8705'},
    {name:'8705'},
    {name:' 87089900(other)'},
  ]

  warranty=[
    {name:'1 Month'},
    {name:'3 Month'},
    {name:'6 Month'},
    {name:'12 Month / 1 Year'},
    {name:'24 Month / 2 Year'},
    {name:'36 Month / 3 Year'},
    {name:'48 Month / 4 Year'},
    {name:'60 Month / 5 Year'},
    {name:'10 Year'},
  ]

  // months = [
  //   {monthNo:'01',monthName:'Jan'},
  //   {monthNo:'02',monthName:'Feb'},
  //   {monthNo:'03',monthName:'Mar'},
  //   {monthNo:'04',monthName:'Apr'},
  //   {monthNo:'05',monthName:'May'},
  //   {monthNo:'06',monthName:'Jun'},
  //   {monthNo:'07',monthName:'Jul'},
  //   {monthNo:'08',monthName:'Aug'},
  //   {monthNo:'09',monthName:'Sep'},
  //   {monthNo:'10',monthName:'Oct'},
  //   {monthNo:'11',monthName:'Nov'},
  //   {monthNo:'12',monthName:'Dec'},
  // ];

  
  addItem:FormGroup
 constructor (){
  this.submitted = false
  this.addItem = new FormGroup({

    itemType: new FormControl(null, [Validators.required]),
    brand: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    group: new FormControl(null, [Validators.required]),
    subGroup: new FormControl(null, [Validators.required]),
    warranty: new FormControl(null, [Validators.required]),
    hsnCode: new FormControl(null, [Validators.required]),

    basicInfo: new FormGroup({
      itemname: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      itemcode: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      dealerPrice: new FormControl('',[Validators.required]),
      rate: new FormControl('',[Validators.required,]),
      mrp: new FormControl('',[Validators.required,]),
      unit: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      tax1: new FormControl('',[Validators.required,]),
      tax2: new FormControl('',[Validators.required,]),
      tax3: new FormControl('',[Validators.required,]),
      tax4: new FormControl('',[Validators.required,]),
      description: new FormControl('',[Validators.required, Validators.maxLength(500)]),
      switch: new FormControl(true),
    })
  });
 }

  get a() { return this.addItem.controls}
  get f() { return this.addItem.get('basicInfo')['controls'] }

  onSubmit() {
    this.submitted = true
    console.log(this.addItem.value);

    if(this.addItem.invalid){
      return;
    }
  }
}
