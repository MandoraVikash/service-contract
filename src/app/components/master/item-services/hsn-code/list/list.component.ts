import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class HsnCodeListComponent {
  tableList = [
    { id: 1, hsnCode: "	8710", rate:"18", },
    { id: 2, hsnCode: "	8702", rate:"18", },
    { id: 3, hsnCode: "	87", rate:"18", },
    { id: 4, hsnCode: "	87", rate:"18", },
  ];
}
