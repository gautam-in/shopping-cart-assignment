import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { IBanner } from 'src/models/banner.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  bannerList: IBanner[] = [];
  isErrorOccured: boolean = false;
  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    this.getBanners();
  }
  getBanners() {
    this._appService.getBanners().subscribe((data : IBanner[]) => {
      this.bannerList = data;
    });
  }
}
