import { Component, OnInit } from '@angular/core';
import { AdsDataService } from '../ads-data.service';
import { Ad } from '../ads';

@Component({
  selector: 'app-ads-panel',
  templateUrl: './ads-panel.component.html',
  styleUrls: ['./ads-panel.component.css']
})
export class AdsPanelComponent implements OnInit {

  ads

  constructor(private adsService: AdsDataService) {

  }

  ngOnInit(): void {
    this.ads = this.adsService.getAds()
  }

}
