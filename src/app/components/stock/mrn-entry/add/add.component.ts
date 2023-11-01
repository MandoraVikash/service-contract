import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/shared/services/accounts/account.service';
import { WarehouseService } from 'src/app/shared/services/accounts/warehouse.service';
import { ItemService } from 'src/app/shared/services/product-services/item.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class MrnEntryAddComponent implements OnInit{
  constructor(private accountService: AccountService, private warehouseService: WarehouseService, private itemSerivce: ItemService){
    this.mrnEntry = new FormGroup({
      itemsForm : new FormArray([this.createItem()]),
    })

    console.log(this.controls);
  }

  createItem(): FormGroup {
    return new FormGroup({
      'rate': new FormControl(''),
      'quantity': new FormControl(''),
      'amount': new FormControl('')
    });
  }
  ngOnInit(): void {
    this.account = this.accountService.getAllAccounts();
    this.warehouse= this.warehouseService.getAllWarehouse();
    this.item = this.itemSerivce.getAllItems();
  }

  get controls(){
    return (<FormArray>this.mrnEntry.get('itemsForm')).controls
  }
  items=[
    {name:'Item A'},
    {name:'Item B'},
    {name:'Item C'},
    {name:'Item D'},
    {name:'Item E'},
    {name:'Item F'},
    {name:'Item G'},
  ]
  

  mrnEntry: FormGroup;
  warehouse = [];
  account = [];
  item = [];


  addItem(){
    (<FormArray>this.mrnEntry.get('itemsForm')).push(this.createItem());
  }

  calculateAmount(index: number) {
    const item = (<FormArray>this.mrnEntry.get('itemsForm')).at(index);
    const rate = item.get('rate').value;
    const quantity = item.get('quantity').value;
    if(rate && quantity){
      item.get('amount').setValue(rate * quantity);
    }
  }
}
