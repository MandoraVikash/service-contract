import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";
@Component({
  selector: 'app-basic-input-field',
  templateUrl: './basic-input-field.component.html',
  styleUrls: ['./basic-input-field.component.scss']
})
export class BasicInputFieldComponent implements OnInit {

  @Input() formControlNameValue;
  @Input() textType:string = 'text';
  @Input() minLength:number;
  @Input() maxLength:number;
  @Input() Placeholder:any="";
  @Input() Required:boolean = false;
  
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}

ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}

lemgthCount(){
  console.log(this.textType)
}

}
