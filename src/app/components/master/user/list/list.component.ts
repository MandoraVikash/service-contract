import { Component } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent {
tableList = [
  {id:1, name:"Ram", phone:9532324453, email:"ram123@test.com", userType:"Staff"},
  {id:2, name:"Jay", phone:8354324453, email:"Jay123@test.com", userType:"Staff"},
  {id:3, name:"Shyam", phone:9524324453, email:"Shyam123@test.com", userType:"Staff"},
  {id:4, name:"Hari", phone:7358424453, email:"Hari123@test.com", userType:"Staff"},
  {id:5, name:"Ram", phone:9532324453, email:"ram123@test.com", userType:"Staff"},
  {id:6, name:"Jay", phone:8354324453, email:"Jay123@test.com", userType:"Staff"},
  {id:7, name:"Shyam", phone:9524324453, email:"Shyam123@test.com", userType:"Staff"},
  {id:8, name:"Hari", phone:7358424453, email:"Hari123@test.com", userType:"Staff"},
];

}
