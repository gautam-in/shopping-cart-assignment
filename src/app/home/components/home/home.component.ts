import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  private active: boolean;
  // public $bannerData: Observable<any>;
  public $categoryData: Observable<any>;
  public bannerDataArray: any[] = [];
  constructor(private inMemoryDataService: InMemoryDataService, private titleService: Title) {
    this.active = true;
    this.titleService.setTitle('Home Page');
   }
  ngOnDestroy(): void {
    this.active = false;
  }

  ngOnInit(): void {
    this.$categoryData = this.inMemoryDataService.getCategoryData();
    // this.$bannerData = this.inMemoryDataService.banner();
    this.inMemoryDataService.banner().pipe(takeWhile(() => this.active)).subscribe((res) => {
      this.bannerDataArray = res;
    })
  }

}
