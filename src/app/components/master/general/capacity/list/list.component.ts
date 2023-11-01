import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CapacityListComponent {
  tableList = [
    { name: "50KVA", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { name: "55KVA", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { name: "60KVA", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { name: "65KVA ", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];
}