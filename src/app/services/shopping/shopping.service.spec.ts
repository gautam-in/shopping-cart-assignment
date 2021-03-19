import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {AddToCartResponse} from '../../models/add-to-cart-response.model';
import {BannersModel} from '../../models/banners.model';
import {CategoryModel} from '../../models/category.model';
import {ProductModel} from '../../models/product-model';
import {ShoppingService} from './shopping.service';

fdescribe('ShoppingService', () => {
  let shoppingService: ShoppingService;
  let httpClientMock: HttpTestingController;
  const mockBannersData: BannersModel[] = [
    {
      "bannerImageUrl": "assets/images/offers/offer1.jpg",
      "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
      "isActive": true,
      "order": 2,
      "id": "5b6c38156cb7d770b7010ccc"
    },
    {
      "bannerImageUrl": "assets/images/offers/offer2.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
      "isActive": false,
      "order": 3,
      "id": "5b6c38336cb7d770b7010ccd"
    },
    {
      "bannerImageUrl": "assets/images/offers/offer3.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
      "isActive": true,
      "order": 1,
      "id": "5b6c38456cb7d770b7010cce"
    }
  ]
  const mockCategoriesData: CategoryModel[] = [
    {
      "name": "Baby Care",
      "key": "baby",
      "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
      "enabled": true,
      "order": 5,
      "imageUrl": "assets/images/category/baby.png",
      "id": "5b6899683d1a866534f516e0"
    },
    {
      "name": "Seafood",
      "key": "seafood",
      "description": "Great place to buy fresh seafood.",
      "enabled": false,
      "order": -1,
      "id": "5b68997d3d1a866534f516e1"
    },
    {
      "name": "Fruits & Vegetables",
      "key": "fruit-and-veg",
      "description": "A variety of fresh fruits and vegetables.",
      "enabled": true,
      "order": 1,
      "imageUrl": "assets/images/category/fruits.png",
      "id": "5b6899953d1a866534f516e2"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    shoppingService = TestBed.inject(ShoppingService);
    httpClientMock = TestBed.get(HttpTestingController);
  });

  it('should get all active banners with sorted order if one active banner and data is not sorted', () => {
    const mockSuccessRespone: BannersModel[] = [
      {
        "bannerImageUrl": "assets/images/offers/offer3.jpg",
        "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
        "isActive": true,
        "order": 1,
        "id": "5b6c38456cb7d770b7010cce"
      },
      {
        "bannerImageUrl": "assets/images/offers/offer1.jpg",
        "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
        "isActive": true,
        "order": 2,
        "id": "5b6c38156cb7d770b7010ccc"
      }
    ]

    shoppingService.getAllActiveBannersInSortedOrder().subscribe((banners: BannersModel[]) => {
      expect(banners).toEqual(mockSuccessRespone);
    })

    const req = httpClientMock.expectOne('http://localhost:3000/api/banners');
    expect(req.request.method).toEqual('GET');

    req.flush(mockBannersData);
  });

  it('should get all active banners with sorted order if no active banner and data is sorted', () => {
    const mockSuccessRespone: BannersModel[] = [
      {
        "bannerImageUrl": "assets/images/offers/offer3.jpg",
        "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
        "isActive": true,
        "order": 1,
        "id": "5b6c38456cb7d770b7010cce"
      },
      {
        "bannerImageUrl": "assets/images/offers/offer1.jpg",
        "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
        "isActive": true,
        "order": 2,
        "id": "5b6c38156cb7d770b7010ccc"
      }
    ]

    shoppingService.getAllActiveBannersInSortedOrder().subscribe((banners: BannersModel[]) => {
      expect(banners).toEqual(mockSuccessRespone);
    })

    const req = httpClientMock.expectOne('http://localhost:3000/api/banners');
    expect(req.request.method).toEqual('GET');

    req.flush([mockBannersData[2], mockBannersData[0]]);
  });

  it('should get all enabled categories with sorted order if one disabled category and data is not sorted', () => {
    const mockSuccessRespone: CategoryModel[] = [
      {
        "name": "Fruits & Vegetables",
        "key": "fruit-and-veg",
        "description": "A variety of fresh fruits and vegetables.",
        "enabled": true,
        "order": 1,
        "imageUrl": "assets/images/category/fruits.png",
        "id": "5b6899953d1a866534f516e2"
      },
      {
        "name": "Baby Care",
        "key": "baby",
        "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
        "enabled": true,
        "order": 5,
        "imageUrl": "assets/images/category/baby.png",
        "id": "5b6899683d1a866534f516e0"
      }
    ]

    shoppingService.getAllEnabledCategoriesInSortedOrder().subscribe((categories: CategoryModel[]) => {
      expect(categories).toEqual(mockSuccessRespone);
    })

    const req = httpClientMock.expectOne('http://localhost:3000/api/categories');
    expect(req.request.method).toEqual('GET');

    req.flush(mockCategoriesData);
  });

  it('should get all enabled categories with sorted order if no disabled category and data is sorted', () => {
    const mockSuccessRespone: CategoryModel[] = [
      {
        "name": "Fruits & Vegetables",
        "key": "fruit-and-veg",
        "description": "A variety of fresh fruits and vegetables.",
        "enabled": true,
        "order": 1,
        "imageUrl": "assets/images/category/fruits.png",
        "id": "5b6899953d1a866534f516e2"
      },
      {
        "name": "Baby Care",
        "key": "baby",
        "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
        "enabled": true,
        "order": 5,
        "imageUrl": "assets/images/category/baby.png",
        "id": "5b6899683d1a866534f516e0"
      }
    ]

    shoppingService.getAllEnabledCategoriesInSortedOrder().subscribe((categories: CategoryModel[]) => {
      expect(categories).toEqual(mockSuccessRespone);
    })

    const req = httpClientMock.expectOne('http://localhost:3000/api/categories');
    expect(req.request.method).toEqual('GET');

    req.flush([mockCategoriesData[2], mockCategoriesData[0]]);
  });

  it('should get all products', () => {
    const mockProducts: ProductModel[] = [
      {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "assets/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
      }
    ];

    shoppingService.getAllProducts().subscribe((products: ProductModel[]) => {
      expect(products).toEqual(mockProducts);
    })

    const req = httpClientMock.expectOne('http://localhost:3000/api/products');
    expect(req.request.method).toEqual('GET');

    req.flush(mockProducts);
  });

  it('should post product to cart', () => {
    const successResponse: AddToCartResponse = {
      "response": "Success",
      "responseMessage": "Product added to cart successfully"
    }

    shoppingService.addToCart('mockId').subscribe((response: AddToCartResponse) => {
      expect(response).toEqual(successResponse);
    })

    const req = httpClientMock.expectOne('http://localhost:3000/api/addToCart');
    expect(req.request.method).toEqual('POST');

    req.flush(successResponse);
  });
});
