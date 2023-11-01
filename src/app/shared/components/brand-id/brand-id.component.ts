import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-brand-id',
  templateUrl: './brand-id.component.html',
  styleUrls: ['./brand-id.component.scss']
})
export class BrandIdComponent  implements OnInit {
  BrandId = [
    { name: "564521" },
    { name: "515153" },
    { name: "454454" },
    { name: "545454" },
    { name: "546454" },
  ];
  @Input() formControlNameValue;
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}
ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}
}
