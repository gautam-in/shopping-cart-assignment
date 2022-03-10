import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { ApiService } from './../api.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs/internal/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let apiServiceSpy: { getApi: jasmine.Spy };
  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj(ApiService, ['getApi']);
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgbCarouselModule,
        RouterTestingModule,
      ],
      declarations: [HomepageComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check Banners Data', () => {
    let fakeBannerData = [
      {
        bannerImageUrl: '/static/images/offers/offer1.jpg',
        bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
        isActive: true,
        order: 1,
        id: '5b6c38156cb7d770b7010ccc',
      }
    ];
    apiServiceSpy.getApi.and.returnValue(of(fakeBannerData));
    fixture.detectChanges();
    expect(apiServiceSpy.getApi).toHaveBeenCalled();
    expect(component.bannersData).toEqual(fakeBannerData);
  });
});
