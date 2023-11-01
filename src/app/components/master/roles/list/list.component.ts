import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class RolesListComponent {
  tableList = [
    {role: 'Admin'},
    {role: 'Sub Admin'},
    {role: 'Staff'},
  ];
}
