import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class MrnEntryListComponent {

  tableList = [
    {challan_no:'3453', challan_date:'12-04-2023',warehouse:'Sumerpur',account: 'Shree Ji Automobile'},
    {challan_no:'3433', challan_date:'22-05-2023',warehouse:'Pali',account: 'Suraj Automobile'},
    {challan_no:'3753', challan_date:'21-06-2023',warehouse:'Jodhpur',account: 'Krishan Pvt ltd'},
    {challan_no:'3973', challan_date:'14-08-2023',warehouse:'Thane',account: 'Om Automobile'},
    {challan_no:'4563', challan_date:'13-09-2023',warehouse:'Delhi',account: 'Jigsaw Automobile'},
  ];

}
