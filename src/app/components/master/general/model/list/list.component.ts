import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ModelListComponent {
  tableList = [
    { id: 1, name: "Model A", make: "Meke A", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 2, name: "Model A", make: "Meke B", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 3, name: "Model C", make: "Meke A", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 4, name: "Model B", make: "Meke D", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];
}
