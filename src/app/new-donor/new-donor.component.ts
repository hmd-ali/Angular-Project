import { Donor } from './../donors.d';
import { Component, OnInit } from '@angular/core';
import { DonorsDataService } from '../donors-data.service';
import { BloodGroup } from '../donors';

@Component({
  selector: 'app-new-donor',
  templateUrl: './new-donor.component.html',
  styleUrls: ['./new-donor.component.css']
})
export class NewDonorComponent implements OnInit {

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

  address!: string
  email!: string
  selectedBloodGroup!: BloodGroup
  hasCorona!: boolean
  additionalInformation!: string
  error = {
    isError: false,
    message: ''
  }
  success = {
    isSuccess: false,
    message: 'Successfully registered!'
  }

  constructor(private donorService: DonorsDataService) { }

  ngOnInit(): void {
    
  }

  displayError(){
    this.error.isError = true
  }

  closeError(){
    this.error.isError = false
    this.error.message = ''
  }

  closeSuccess(){
    this.success.isSuccess = false
  }

  click(){
    if(this.address === undefined || this.email === undefined || this.selectedBloodGroup === undefined) {
      this.closeSuccess()
      this.error.message = 'Please Fill required Fields'
      this.displayError()
    }
    else if(this.hasCorona) {
      this.closeSuccess()
      this.error.message = "Failed to register! Infected cannot donate blood."
      this.displayError()
    }
    else {
      this.closeError()
      const newDonor:Donor = {
        address: this.address,
        email: this.email,
        bloodGroup: this.selectedBloodGroup,
        additionalInfo: this.additionalInformation
      }
      this.donorService.addDonor(newDonor)
      this.success.isSuccess = true
      console.log('email:', this.email)
      console.log('address:', this.address)
      console.log('bloodGroup',this.selectedBloodGroup)
    }
  }

}
