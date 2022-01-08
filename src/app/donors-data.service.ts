import { Injectable } from '@angular/core';
import { Donor, BloodGroup } from './donors';


@Injectable({
  providedIn: 'root'
})
export class DonorsDataService {

  constructor() { }

  donors: Donor[] = [
    {
      bloodGroup: 'A+',
      email: 'elenamakarova1969@kimachina.com',
      address: '1762 Glendale Avenue',
      additionalInfo: ''
    },
    {
      bloodGroup: 'A-',
      email: 'leonmcgann@zubairnews.com',
      address: '205 Fairmont Avenue',
      additionalInfo: ''
    },
    {
      bloodGroup: 'B+',
      email: 'jim1950@litom.icu',
      address: '1332 Sarah Drive',
      additionalInfo: ''
    },
    {
      bloodGroup: 'B-',
      email: 'dgovanna2@kimachina.com',
      address: '2368 Summit Park Avenue',
      additionalInfo: ''
    },
    {
      bloodGroup: 'O+',
      email: 'albinsky@taikz.com',
      address: '4037 Pick Street',
      additionalInfo: ''
    },
    {
      bloodGroup: 'O-',
      email: 'stork2003@outluk.co',
      address: '2419 Memory Lane',
      additionalInfo: ''
    },
    {
      bloodGroup: 'A+',
      email: 'rubenr2020@specialinoevideo.ru',
      address: '380 Lawman Avenue',
      additionalInfo: ''
    },
    {
      bloodGroup: 'A-',
      email: 'mortgageman@mailpluss.com',
      address: '2099 Woodside Circle',
      additionalInfo: ''
    },
  ]

  getDonorsByGroup(group: BloodGroup): Donor[]| [] {
    return this.donors.filter(donor => donor.bloodGroup === group)
  }
  addDonor(donor: Donor): void {
    this.donors.push(donor)
  }
}
