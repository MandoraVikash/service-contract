import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/services/product-services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ItemListComponent implements OnInit {
  constructor(private itemService:ItemService ){}
  ngOnInit(): void {
this.tableList =  this.itemService.getAllItems() }
  tableList = []
}
