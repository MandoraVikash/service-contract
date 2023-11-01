import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class MakeListComponent {
  tableList = [
    { id: 1, name: "Make A", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 2, name: "Meke B", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 3, name: "Meke C", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 4, name: "Meke A", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];
}
