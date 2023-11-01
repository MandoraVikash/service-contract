import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  Warehouse = [
    { name: "Ahemdabad" },
    { name: "Rajasthan" },
    { name: "Delhi" },
    { name: "Hariyana" },
    { name: "Hariyana" },
  ];
  @Input() formControlNameValue;
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}
ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}
}
