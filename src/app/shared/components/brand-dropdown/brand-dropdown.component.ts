import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-brand-dropdown',
  templateUrl: './brand-dropdown.component.html',
  styleUrls: ['./brand-dropdown.component.scss']
})
export class BrandDropdownComponent implements OnInit  {
  @Input() formControlNameValue;
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}
ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}
}
