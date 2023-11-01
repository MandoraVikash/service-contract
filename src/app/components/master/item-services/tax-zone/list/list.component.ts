import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TaxZoneListComponent {
 
  taxZone=[
    {name:'MEPZ SEZ'},
    {name:'Cochin SEZ'},
    {name:'Noida SEZ'},
    {name:'Kandla SEZ'},
    {name:'Vishakhapatnam SEZ'},
    {name:'SEEPZ SEZ'},
    {name:'Falta SEZ'},
   ]
}
