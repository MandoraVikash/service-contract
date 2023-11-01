import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-active-switch',
  templateUrl: './active-switch.component.html',
  styleUrls: ['./active-switch.component.scss']
})
export class ActiveSwitchComponent  implements OnInit  {
  @Input() formControlNameValue;
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}
ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}
}
