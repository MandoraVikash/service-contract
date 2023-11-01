import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class UserAddComponent {
  submitted: boolean
  addUser: FormGroup
  constructor() {
    this.submitted = false
    this.addUser = new FormGroup({
      basicInfo: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormControl('', Validators.required),
        switch: new FormControl(true, Validators.required),
      })
    });
  }
  get f() { return this.addUser.get('basicInfo')['controls'] }

  onSubmit() {
    this.submitted = true;
    console.warn(this.addUser.value);
    if (this.addUser.invalid) {
      return;
    }
  }

  defaultBindingsList = [
    {name:'Admin'},
    {name:'Sub Admin'},
    {name:'Staff'},
  ];
  image: string = ''

  country=[
    {name:'India'},
    {name:'Australia'},
    {name:'Russia'},
    {name:'New Zealand'},
    {name:'England'},
    {name:'Sri Lanka'},
  ]

  onFileAdded(e) {
    const file = e.target.files[0]
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.image = `${e.target.result}`
    }
  }

}
