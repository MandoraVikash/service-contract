import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-number-input-field',
  templateUrl: './number-input-field.component.html',
  styleUrls: ['./number-input-field.component.scss']
})
export class NumberInputFieldComponent {
  @Input() formControlNameValue;
  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() Placeholder:any="";
  @Input() Required: boolean = false;

  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
