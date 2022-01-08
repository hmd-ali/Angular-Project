import { Component, OnInit } from '@angular/core';
import { DonorsDataService } from '../donors-data.service';
import { Donor } from '../donors';
import { BloodGroup } from '../donors';

@Component({
  selector: 'app-search-donor',
  templateUrl: './search-donor.component.html',
  styleUrls: ['./search-donor.component.css']
})
export class SearchDonorComponent implements OnInit {

  selectedGroup!: BloodGroup
  isEmpty = false
  donorList!: Donor[] | []

  bloodGroups: BloodGroup[] = [
    'A+',
    'A-',
    'AB+',
    'AB-',
    'B+',
    'B-',
    'O+',
    'O-'
  ]
  receiverEmail = ''
  
  constructor(private donorService: DonorsDataService) { }

  ngOnInit(): void {
  }

  selectGroup(){
    const data = this.donorService.getDonorsByGroup(this.selectedGroup)
    if(data.length === 0) {
      this.isEmpty = true
      this.donorList = []
    } else {
      console.log('data',data)
      console.log('selectedGroup',this.selectedGroup)
      this.donorList = data
      this.isEmpty = false
    }
  }
  updateReceiver(email: string){
    this.receiverEmail = email
  }

}
