import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";
@Component({
  selector: 'app-basic-dropdown',
  templateUrl: './basic-dropdown.component.html',
  styleUrls: ['./basic-dropdown.component.scss']
})
export class BasicDropdownComponent implements OnInit {

  @Input() formControlNameValue;
  @Input() items;

  ItemValue

  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {
  }

  
  CheckData
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
