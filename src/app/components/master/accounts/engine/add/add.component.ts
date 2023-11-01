import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Make} from 'src/app/shared/model/general/make.model'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class EngineAddComponent {
  submitted = false;

  make:Make[]=[
    {makeId:1,makeName:"Honda",isActive:true},
    {makeId:2,makeName:"Hero",isActive:true},
    {makeId:3,makeName:"Mahindra",isActive:true},
    {makeId:4,makeName:"Ashok LeyLand",isActive:true},
  ];

  months = [
    {monthNo:'01',monthName:'Jan'},
    {monthNo:'02',monthName:'Feb'},
    {monthNo:'03',monthName:'Mar'},
    {monthNo:'04',monthName:'Apr'},
    {monthNo:'05',monthName:'May'},
    {monthNo:'06',monthName:'Jun'},
    {monthNo:'07',monthName:'Jul'},
    {monthNo:'08',monthName:'Aug'},
    {monthNo:'09',monthName:'Sep'},
    {monthNo:'10',monthName:'Oct'},
    {monthNo:'11',monthName:'Nov'},
    {monthNo:'12',monthName:'Dec'},
  ];
  year = [
    {name:'2012'},
    {name:'2013'},
    {name:'2014'},
    {name:'2015'},
    {name:'2016'},
    {name:'2017'},
    {name:'2018'},
    {name:'2019'},
    {name:'2020'},
    {name:'2021'},
    {name:'2022'},
    {name:'2023'},
  ];
  tableList = [
    {id:1, chassisNo:"5545215652",model:"HrR2345", capacity:"50KVA",  make:"Hero",brand:"Hero",WareHouse:"Ahemdabad"},
    {id:2, chassisNo:"3422235235",model:"AsLyL29", capacity:"55KVA",  make:"Ak",brand:"Ashok Leyland",WareHouse:"Rajasthan"},
    {id:3, chassisNo:"2341256344",model:"HOD282", capacity:"60KVA", make:"Honda",brand:"Honda",WareHouse:"Delhi"},
    {id:4, chassisNo:"6564534544",model:"MHNDR55", capacity:"65KVA",  make:"Mahindra",brand:"Mahindra",WareHouse:"Hariyana"},
  ];
  
  addEngine:FormGroup
 constructor (){
  this.submitted = false
  this.addEngine = new FormGroup({
    make: new FormControl(null, [Validators.required]),
    modelNumber: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    year: new FormControl,
    month: new FormControl,
    basicInfo: new FormGroup({
      chassisNumber: new FormControl('',Validators.required),
      switch: new FormControl(true),
    })
  });
 }

  get a() { return this.addEngine.controls}
  get f() { return this.addEngine.get('basicInfo')['controls'] }

  onSubmit() {
    this.submitted = true
    console.log(this.addEngine.value);

    if(this.addEngine.invalid){
      return;
    }
  }
}
