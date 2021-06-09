import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { environment } from 'src/environments/environment';

describe('ProductService', () => {
  let service: ProductService;
  let prodData = [
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
      bannerImageUrl: '/static/images/offers/offer1.jpg',
      imageUrl: '/static/images/offers/offer1.jpg',
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
      bannerImageUrl: '/static/images/offers/offer1.jpg',
      imageUrl: '/static/images/offers/offer2.jpg',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchProducts', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.fetchProducts().subscribe((res) => {
        expect(res.length).toEqual(prodData.length);
      });
      const req = httpTestingController.expectOne(
        environment.server + '/products'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(prodData);
      httpTestingController.verify();
    });
  });

  describe('fetchBanners', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.fetchBanners().subscribe((res) => {
        expect(res.length).toEqual(prodData.length);
      });
      const req = httpTestingController.expectOne(
        environment.server + '/banners'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(prodData);
      httpTestingController.verify();
    });
  });

  describe('fetchCategories', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.fetchCategories().subscribe((res) => {
        expect(res.length).toEqual(prodData.length);
      });
      const req = httpTestingController.expectOne(
        environment.server + '/categories'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(prodData);
      httpTestingController.verify();
    });
  });

  describe('addToCart', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const response = {
        response: 'Success',
        responseMessage: 'Product added to cart successfully',
      };
      service.addToCart().subscribe((res) => {
        expect(res).toEqual(response);
      });
      const req = httpTestingController.expectOne(
        environment.server + '/addToCart'
      );
      expect(req.request.method).toEqual('POST');
      req.flush(response);
      httpTestingController.verify();
    });
  });
});
