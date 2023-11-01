import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class SubGroupListComponent {

  tableList = [
    { id: 1, code:"20", name: "Sub Group A", group:"Group A", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 2, code:"38", name: "Sub Group C", group:"Group C", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 3, code:"19", name: "Sub Group A", group:"Group B", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 4, code:"48", name: "Sub Group B", group:"Group C", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 5, code:"48", name: "Sub Group B", group:"Group A", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];

}
