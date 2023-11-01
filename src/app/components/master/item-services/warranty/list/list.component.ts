import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class WarrantyListComponent {
  tableList = [
    { id: 1, code:"20", pincode:"306104", name: "1Year", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 2, code:"38", pincode:"306401", name: "3Year", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 3, code:"19", pincode:"306302", name: "1Year", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 4, code:"48", pincode:"306401", name: "2Year", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];
}
