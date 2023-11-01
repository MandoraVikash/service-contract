import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-make-id',
  templateUrl: './make-id.component.html',
  styleUrls: ['./make-id.component.scss']
})
export class MakeIdComponent implements OnInit {
  MakeId = [
    { name: "345654" },
    { name: "854562" },
    { name: "541154" },
    { name: "548545" },
    { name: "865232" },
  ];
  @Input() formControlNameValue;
  form: FormGroup;
constructor(private rootFormGroup: FormGroupDirective) {}
ngOnInit(): void {
  this.form = this.rootFormGroup.control;
}
}
