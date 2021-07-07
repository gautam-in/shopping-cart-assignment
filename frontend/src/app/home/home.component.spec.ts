import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { MatCarouselModule } from 'ng-mat-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from '../services/api.service';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

const categories = [{
  "name": "Beverages",
  "key": "beverages",
  "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
  "enabled": true,
  "order": 3,
  "imageUrl": "/assets/images/category/beverages.png",
  "id": "5b675e5e5936635728f9fc30"
}];

const banners = [
  {
    "bannerImageUrl": "/assets/images/offers/offer1.jpg",
    "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
    "isActive": true,
    "order": 1,
    "id": "5b6c38156cb7d770b7010ccc"
  },
  {
    "bannerImageUrl": "/assets/images/offers/offer2.jpg",
    "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
    "isActive": true,
    "order": 2,
    "id": "5b6c38336cb7d770b7010ccd"
  }
]

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const apiservice = jasmine.createSpyObj('ApiService', {
    getCategories: of(categories),
    getBanners: of(banners),
  });
  const dataService = jasmine.createSpyObj('DataService', ['setSelectedCategory']);
  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {provide: ApiService, useValue: apiservice},
        {provide: DataService, useValue: dataService},
        {provide: Router, useValue: router},
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatCarouselModule.forRoot(),
        BrowserAnimationsModule
      ],
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

  it('should render category details', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.category-section .details h2').textContent).toContain('Beverages');
    expect(compiled.querySelector('.category-section .details p').textContent).toContain('Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ');
    expect(compiled.querySelector('.category-section .details button').textContent).toContain('Explore beverages');
  });

  it('should render one section element', () => {
    expect(fixture.debugElement.queryAll(By.css('.category-section')).length).toBe(1);
  });

  it('should load two banner object', () => {
    expect(component.banners.length).toBe(2);
  });

  it('should trigger openProduct method on category button click', fakeAsync(() => {
    spyOn(component, 'openProduct');

    let buttonElement = fixture.debugElement.nativeElement.querySelector('.category-section .details button');
    buttonElement.click();
    tick();

    expect(component.openProduct).toHaveBeenCalled();
  }));

  it('should call setSelectedCategory and router navigate method', () => {
    component.openProduct(categories[0]);

    expect(dataService.setSelectedCategory).toHaveBeenCalledWith(categories[0]);
    expect(router.navigate).toHaveBeenCalledWith(['products']);
  });
});
