import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { BackendInteractionService } from '../../services/backend-interaction.service';
import { CarousalComponent } from '../carousal/carousal.component';
import { Banner } from '../../models/banner.model';
import { OrderPipe } from '../../modules/shared/pipes/order-pipe/order.pipe';
import { asyncData } from '../../testing/async-observable.helper';
import { StoreStub } from '../../testing/store.stub';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let backendInteractionService: any
  const response: Banner[] =
    [
      {
        "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
        "bannerImageUrl": "/static/images/offers/offer1.jpg",
        "id": "5b6c38156cb7d770b7010ccc",
        "isActive": true,
        "order": 1
      }
    ];
  beforeEach(async () => {
    backendInteractionService = jasmine.createSpyObj('BackendInteractionService', ['getBanners']);
    backendInteractionService.getBanners.and.returnValue(asyncData(response))
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, CarousalComponent, OrderPipe],
      providers: [
        { provide: Store, useClass: StoreStub },
        { provide: BackendInteractionService, useValue: backendInteractionService }
      ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display carousal', () => {
    fixture.detectChanges();
    let carousal = fixture.debugElement.queryAll(By.directive(CarousalComponent));
    expect(carousal.length).toBe(1, 'carousal displayed')
  })

  it('should show Banners after getBanner', fakeAsync(() => {

    component.getBanners();
    tick();
    expect(component.bannerItems).toBe(response, 'Banner list received')
  }))
});
