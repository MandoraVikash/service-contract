import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AccountAddComponent {
  submitted = false;
  
  addAccountForm:FormGroup
 constructor (){
  this.submitted = false

  this.addAccountForm = new FormGroup({

    taxZone: new FormControl(null, [Validators.required]),
    area: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),

    basicInfo: new FormGroup({
      
      accuntName: new FormControl('',Validators.required),
      accountGroup: new FormControl('',Validators.required),
      email: new FormControl,
      mobileNumber: new FormControl,
      phoneNumber: new FormControl,
      gstNumber: new FormControl,
      panNumber: new FormControl,
      description: new FormControl,
      
      contactPersonName: new FormControl('',Validators.required),
      contactMobile: new FormControl('',Validators.required),
      address1: new FormControl('',Validators.required),
      address2: new FormControl,
      pincode: new FormControl('',Validators.required),

      switch: new FormControl(true),
    })
  });
 }

 taxZone=[
  {name:'MEPZ SEZ'},
  {name:'Cochin SEZ'},
  {name:'Noida SEZ'},
  {name:'Kandla SEZ'},
  {name:'Vishakhapatnam SEZ'},
  {name:'SEEPZ SEZ'},
  {name:'Falta SEZ'},
 ]
 state=[
  {name:'Rajasthan'},
  {name:'Gujrat'},
  {name:'Delhi'},
  {name:'Panjab'},
  {name:'Mumbai'},
]
area=[
  {name:'Bali'},
  {name:'Desuri'},
  {name:'Jaitaran'},
  {name:'Marwar Junction'},
  {name:'Pali'},
  {name:'Rani'},
  {name:'Raipur'},
  {name:'Rohat'},
  {name:'Sojat'},
  {name:'Sumerpur'},
]
// , , , , , , , ,  and .
city=[
  {name:'Ajmer'},
  {name:'Ahemdabad'},
  {name:'Alwar'},
  {name:'Bharatpur'},
  {name:'Jaipur'},
  {name:'Jodhpur'},
  {name:'Pali'},
  {name:'Surat'},
]
country=[
  {name:'India'},
  {name:'Australia'},
  {name:'Russia'},
  {name:'New Zealand'},
  {name:'England'},
  {name:'Sri Lanka'},
]
  get a() { return this.addAccountForm.controls}
  get f() { return this.addAccountForm.get('basicInfo')['controls'] }

  onSubmit() {
    this.submitted = true
    console.log(this.addAccountForm.value);

    if(this.addAccountForm.invalid){
      return;
    }
  }

}
