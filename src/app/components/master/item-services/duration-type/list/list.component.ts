import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DurationTypeListComponent {
  tableList = [
    { id: 1, code:"20", pincode:"306104", name: "Days", days:2, city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 2, code:"38", pincode:"306401", name: "Month", days:30, city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 3, code:"19", pincode:"306302", name: "Days", days:5, city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 4, code:"48", pincode:"306401", name: "Weeks", days:7, city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];
}
