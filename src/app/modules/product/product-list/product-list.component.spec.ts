import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaObserver } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SeoService } from 'src/app/core/services/seo.service';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore;
  const initialState = {
    products: {
      allProducts: [
        {
          name: 'Fresho Kiwi - Green, 3 pcs',
          imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
          description:
            'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
          price: 87,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-kiwi-3',
          id: '5b6c6a7f01a7c38429530883',
        },
        {
          name: 'Apple - Washington, Regular, 4 pcs',
          imageURL: '/static/images/products/fruit-n-veg/apple.jpg',
          description:
            'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
          price: 187,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-apple-4',
          id: '5b6c6aeb01a7c38429530884',
        },
      ],
      currentProducts: [
        {
          name: 'Fresho Kiwi - Green, 3 pcs',
          imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
          description:
            'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
          price: 87,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-kiwi-3',
          id: '5b6c6a7f01a7c38429530883',
        },
        {
          name: 'Apple - Washington, Regular, 4 pcs',
          imageURL: '/static/images/products/fruit-n-veg/apple.jpg',
          description:
            'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
          price: 187,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-apple-4',
          id: '5b6c6aeb01a7c38429530884',
        },
      ],
      error: '',
      loading: false,
      categoryWiseProducts: new Map().set('5b6c6aeb01a7c38429530884', {
        name: 'Apple - Washington, Regular, 4 pcs',
        imageURL: '/static/images/products/fruit-n-veg/apple.jpg',
        description:
          'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
        price: 187,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-apple-4',
        id: '5b6c6aeb01a7c38429530884',
      }),
    },
    cart: {
      products: [],
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductListComponent],
      providers: [
        provideMockStore({ initialState }),
        SeoService,
        MediaObserver,
      ],
    });
    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
    debugger;
  });

  it(`isMobile has default value`, () => {
    expect(component.isMobile).toEqual(false);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const seoServiceStub: SeoService =
        fixture.debugElement.injector.get(SeoService);
      spyOn(seoServiceStub, 'setMetaData').and.callThrough();
      component.ngOnInit();
      expect(seoServiceStub.setMetaData).toHaveBeenCalled();
    });
  });

  describe('buyProduct', () => {
    it('makes expected calls', () => {
      spyOn(component, 'buyProduct').and.callThrough();
      component.buyProduct({
        name: 'Fresho Kiwi - Green, 3 pcs',
        imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
        description:
          'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
        price: 87,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-kiwi-3',
        id: '5b6c6a7f01a7c38429530883',
      });
      expect(component.buyProduct).toHaveBeenCalled();
    });
  });

  describe('onDelete', () => {
    it('makes expected calls', () => {
      spyOn(component, 'onDelete').and.callThrough();
      component.onDelete(0);
      expect(component.onDelete).toHaveBeenCalled();
    });
  });
});
