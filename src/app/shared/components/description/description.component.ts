import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() formControlNameValue;
  
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}

ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}
}
