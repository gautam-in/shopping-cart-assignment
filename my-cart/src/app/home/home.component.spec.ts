import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { BackendInteractionService } from '../backend-interaction.service';
import { CarousalComponent } from '../carousal/carousal.component';
import { Banner } from '../model/Banner.model';
import { OrderPipe } from '../shared/order-pipe/order.pipe';
import { asyncData } from '../testing/async-observable.helper';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let backendInteractionService : any
  beforeEach(async () => {
    backendInteractionService = jasmine.createSpyObj('BackendInteractionService',['getBanners']);
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent , CarousalComponent ,OrderPipe],
      providers : [
        {provide : Store,useValue:null},
        {provide : BackendInteractionService, useValue:backendInteractionService}
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display carousal',()=>{
     let carousal = fixture.debugElement.queryAll(By.directive(CarousalComponent));
     expect(carousal.length).toBe(1,'carousal displayed')
  })

  it('should show Banners after getBanner',fakeAsync(()=>{
    const response:Banner[] =
    [ 
      {
      "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
      "bannerImageUrl": "/static/images/offers/offer1.jpg",
      "id": "5b6c38156cb7d770b7010ccc",
      "isActive": true,
      "order": 1
      }
    ];
    backendInteractionService.getBanners.and.returnValue(asyncData(response))
    component.getBanners();
    tick();
    expect(component.bannerItems).toBe(response,'Banner list received')
  }))
});
