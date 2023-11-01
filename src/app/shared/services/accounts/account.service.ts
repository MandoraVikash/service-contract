import { Injectable } from '@angular/core';
import { Account } from '../../model/account/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account: Account[] = [
    {
      accountId: 1,
      accountName: 'Anshuman',
      accountGroup: 'creditor',
      contactPerson: 'Anushman',
      contactNo: 75783857573,
      addressLine1: '',
      areaId: 1,
      cityId: 1,
      stateId: 1,
      countryId: 1,
      pincode: 306401,
      taxZoneId: 1,
      isActive: true,
    },
    {
      accountId: 2,
      accountName: 'Vikram',
      accountGroup: 'creditor',
      contactPerson: 'Vikram',
      contactNo: 8573453849,
      addressLine1: '',
      areaId: 1,
      cityId: 1,
      stateId: 1,
      countryId: 1,
      pincode: 306401,
      taxZoneId: 1,
      isActive: true,
    },
    {
      accountId: 3,
      accountName: 'Vijay',
      accountGroup: 'creditor',
      contactPerson: 'Vikram',
      contactNo: 9573453849,
      addressLine1: '',
      areaId: 1,
      cityId: 1,
      stateId: 1,
      countryId: 1,
      pincode: 306401,
      taxZoneId: 1,
      isActive: true,
    },
  ];

  getAllAccounts(){
    return this.account.slice();
  }
  constructor() { }
}
