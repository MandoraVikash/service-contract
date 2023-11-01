import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, NgModel } from "@angular/forms";
@Component({
  selector: 'app-make-dropdown',
  templateUrl: './make-dropdown.component.html',
  styleUrls: ['./make-dropdown.component.scss'],
  providers: [NgModel]
})
export class MakeDropdownComponent implements OnInit {
  // dropToggle = false;
  // checked = false
  // inputValue:string;

  Make = [
    { name: "Mahindra" },
    { name: "Hero" },
    { name: "Mahindra" },
    { name: "Ashok Leyland" },
    { name: "Honda" },
  ];

  // selectedIndex: number;
  // changeSelection(event, index) {
  //   this.selectedIndex = event.target.checked ? index : undefined;
  //   this.inputValue = this.Make[index].name;
  //   this.dropToggle = false;
  // }
  @Input() formControlNameValue;
  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) { }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
