import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class GroupListComponent {
  tableList = [
    {code:"20", name: "Group A", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    {code:"38", name: "Group C", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    {code:"19", name: "Group C", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    {code:"48", name: "Group B", city:"Pali", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];

}
