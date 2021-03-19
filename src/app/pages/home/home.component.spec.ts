import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {ComponentsModule} from '../../components/components.module';
import {BannersModel} from '../../models/banners.model';
import {CategoryModel} from '../../models/category.model';
import {ShoppingService} from '../../services/shopping/shopping.service';
import {HomeComponent} from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let shoppingService: ShoppingService;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ComponentsModule
      ],
      declarations: [HomeComponent],
      providers: [{provide: Router, useValue: routerSpy}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    shoppingService = TestBed.get(ShoppingService);
  });

  it('should initialise the component', () => {
    spyOn(component, 'getAllBanners');
    spyOn(component, 'getAllCategories');
    component.ngOnInit();
    expect(component.getAllBanners).toHaveBeenCalled();
    expect(component.getAllCategories).toHaveBeenCalled();
  });

  it('should fetch all banners from API call', () => {
    const mockBannersResponse: BannersModel[] = [
      {
        bannerImageUrl: 'assets/images/offers/offer3.jpg',
        bannerImageAlt: 'Independence Day Deal - Rs99 off on domex',
        isActive: true,
        order: 1,
        id: '5b6c38456cb7d770b7010cce'
      },
      {
        bannerImageUrl: 'assets/images/offers/offer1.jpg',
        bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
        isActive: true,
        order: 2,
        id: '5b6c38156cb7d770b7010ccc'
      }
    ];
    spyOn(shoppingService, 'getAllActiveBannersInSortedOrder').and.returnValue(of(mockBannersResponse));

    component.getAllBanners();

    expect(shoppingService.getAllActiveBannersInSortedOrder).toHaveBeenCalled();
  });

  it('should fetch all categories from API call', () => {
    const mockCategoriesResponse: CategoryModel[] = [
      {
        name: 'Fruits & Vegetables',
        key: 'fruit-and-veg',
        description: 'A variety of fresh fruits and vegetables.',
        enabled: true,
        order: 1,
        imageUrl: 'assets/images/category/fruits.png',
        id: '5b6899953d1a866534f516e2'
      },
      {
        name: 'Baby Care',
        key: 'baby',
        description: 'Shop online for Baby Products, Diapers, Skin Care Products,etc.',
        enabled: true,
        order: 5,
        imageUrl: 'assets/images/category/baby.png',
        id: '5b6899683d1a866534f516e0'
      }
    ];
    spyOn(shoppingService, 'getAllEnabledCategoriesInSortedOrder').and.returnValue(of(mockCategoriesResponse));

    component.getAllCategories();

    expect(shoppingService.getAllEnabledCategoriesInSortedOrder).toHaveBeenCalled();
  });

  it('should redirect user to products page with specific category of products', () => {
    component.redirectToProducts('beverages');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/products'], {queryParams: {category: 'beverages'}});
  });
});
