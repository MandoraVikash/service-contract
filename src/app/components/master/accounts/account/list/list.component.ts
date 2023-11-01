import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../../shared/services/accounts/account.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AccountListComponent implements OnInit {
  constructor(private accountService: AccountService){}
  ngOnInit(): void {
   this.tableList = this.accountService.getAllAccounts();
  }
  tableList = [];
}
