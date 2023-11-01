import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EngineListComponent {
  tableList = [
    {id:1, chassisNo:"5545215652",model:"HrR2345", capacity:"50KVA",  make:"Hero",brand:"Hero",WareHouse:"Ahemdabad"},
    {id:2, chassisNo:"3422235235",model:"AsLyL29", capacity:"55KVA",  make:"Ak",brand:"Ashok Leyland",WareHouse:"Rajasthan"},
    {id:3, chassisNo:"2341256344",model:"HOD282", capacity:"60KVA", make:"Honda",brand:"Honda",WareHouse:"Delhi"},
    {id:4, chassisNo:"6564534544",model:"MHNDR55", capacity:"65KVA",  make:"Mahindra",brand:"Mahindra",WareHouse:"Hariyana"},
  ];
}
