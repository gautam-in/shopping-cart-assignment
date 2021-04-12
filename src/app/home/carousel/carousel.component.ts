import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  bannerList: any = [];
  isErrorOccured: boolean = false;
  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    this.getBanners();
  }
  getBanners() {
    this._appService.getBanners().subscribe(
      (data) => {
        this.bannerList = data;
      },
      (error) => {
        console.log('error occured', error);
        this.isErrorOccured = true;
      }
    );
  }
}
