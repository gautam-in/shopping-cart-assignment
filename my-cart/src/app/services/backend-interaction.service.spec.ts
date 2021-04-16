import { BackendInteractionService } from './backend-interaction.service';
import { Banner } from '../models/banner.model';
import { Category } from '../models/category.model';
import { Product } from '../models/products.model';
import { asyncData } from '../testing/async-observable.helper';

describe('BackendInteractionService', () => {
  let service: BackendInteractionService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new BackendInteractionService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Httpclient should return the expected response (For Banners)', () => {
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
    httpClientSpy.get.and.returnValue(asyncData(response))

    service.getBanners().subscribe(banners => {
      expect(banners).toBe(response)
    })
  });

  it('Httpclient should return the expected response (For Categories)', () => {
    const response: Category[] =
      [
        {
          description: 'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.',
          enabled: true,
          id: "5b675e5e5936635728f9fc30",
          imageUrl: "/static/images/category/beverages.png",
          key: "beverages",
          name: "Beverages",
          order: 3
        }
      ];
    httpClientSpy.get.and.returnValue(asyncData(response))

    service.getCategories().subscribe(categories => expect(categories).toBe(response))
  });

  it('Httpclient should return the expected response (For products)', () => {
    const response: Product[] =
      [
        {
          category: "5b6899953d1a866534f516e2",
          description: "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
          id: "5b6c6a7f01a7c38429530883",
          imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
          name: "Fresho Kiwi - Green, 3 pcs",
          price: 87,
          sku: "fnw-kiwi-3",
          stock: 50
        }
      ];
    httpClientSpy.get.and.returnValue(asyncData(response))

    service.getProducts().subscribe(products => expect(products).toBe(response))
  });


});
