import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-sub-item-group-dropdown',
  templateUrl: './sub-item-group.component.html',
  styleUrls: ['./sub-item-group.component.scss']
})
export class SubItemGroupComponent implements OnInit {
  SubItem = [
    { name: "Moter" },
    { name: "Moter" },
    { name: "Moter" },
    { name: "Moter" },
    { name: "Moter" },
  ];
  @Input() formControlNameValue;
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}
ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}
}
