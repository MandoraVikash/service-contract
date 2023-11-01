import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-uppercase-input-field',
  templateUrl: './uppercase-input-field.component.html',
  styleUrls: ['./uppercase-input-field.component.scss']
})
export class UppercaseInputFieldComponent implements OnInit  {
  @Input() formControlNameValue;
  @Input() minLength:number;
  @Input() maxLength:number;
  @Input() Required:boolean = false;
  
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}

textValue:string;

textValueChange(refInput){
  this.textValue = refInput.toUpperCase();
}
ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}


}
