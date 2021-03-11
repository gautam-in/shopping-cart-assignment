import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'Sabka-Bazaar';
  count: number;
  active: boolean;
  hideFooter = true;
  constructor(private inMemoryDataService: InMemoryDataService){
    this.count = 0;
    this.active = true;
    if (screen.width < 768){
      this.hideFooter = false;
    }
  }
  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.inMemoryDataService.cartSubject.pipe(takeWhile(() => this.active)).subscribe((res) => {
      this.count = res.cartCount;
      this.inMemoryDataService.cartlistData = res;
    })
    // tslint:disable-next-line: deprecation
    this.inMemoryDataService.updateCartCount.pipe(takeWhile(() => this.active)).subscribe((res) => {
      this.count = res;
    })
  }
  
  ngOnDestroy(): void {
    this.active = false;
  }
}
