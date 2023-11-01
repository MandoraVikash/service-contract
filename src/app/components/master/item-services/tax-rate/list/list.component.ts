import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TaxRateListComponent {
  tableList = [
    { id: 1, name: "CGST", rate:'18%', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 2, name: "SGST", rate:'22%' , description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 3, name: "IGST", rate:'25%', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
    { id: 4, name: "SGST", rate:'22%' , description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", },
  ];
}
