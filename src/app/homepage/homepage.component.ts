import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { GlobalConstants } from './../global.constant';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
bannersData: Array<any> = [];
catgoryData: Array<any> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getApi(GlobalConstants.BANNERS).subscribe((res: any) => {
      this.bannersData = res;
    })
    this.apiService.getApi(GlobalConstants.CATEGORY).subscribe((res: any) => {
      this.catgoryData = res;
    })
  }
}
