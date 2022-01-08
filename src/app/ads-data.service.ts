import { Injectable } from '@angular/core';
import { Link, Ad } from './ads'

@Injectable({
  providedIn: 'root'
})
export class AdsDataService {

  constructor() { }

  ads: Ad[] = [
    {
      title: 'Ad 1',
      body: 'This is Ad 1',
      link:{
        text: 'Go to website',
        url: '#'
      }
    },
    {
      title: 'Ad 2',
      body: 'This is Ad 2',
    },
    {
      title: 'Ad 3',
      body: 'This is Ad 3',
      link:{
        text: 'Visit FaceBook',
        url: '#'
      }
    },
    {
      title: 'Ad 4',
      body: 'This is Ad 4',
      link:{
        text: 'Go to website',
        url: '#'
      }
    },
    {
      title: 'Ad 5',
      body: 'This is Ad 5',
    },
  ]

  getAds(): Ad[] {
    return this.ads
  }
}
