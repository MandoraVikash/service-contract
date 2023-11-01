import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../../../../shared/services/accounts/warehouse.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class WarehouseListComponent implements OnInit{
  constructor(private warehouseService: WarehouseService){}
  ngOnInit(): void {
    this.tableList = this.warehouseService.getAllWarehouse();
  }
  tableList = []

}
