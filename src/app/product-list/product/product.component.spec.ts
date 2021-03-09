import { HttpClientModule } from '@angular/common/http';
import { ApidataService } from '../../services/apidata.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let apiDataService: ApidataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [ApidataService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    apiDataService = TestBed.inject(ApidataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit method', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call ngOnChanges method', () => {
    spyOn(component, 'ngOnChanges').and.callThrough();
    component.ngOnChanges({});
    expect(component.ngOnChanges).toHaveBeenCalled();
  });

  it('should call addProductToCart method', () => {
    const product = {
      name: 'Fresho Kiwi - Green, 3 pcs',
      imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
      description: 'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
      price: 87,
      stock: 50,
      category: '5b6899953d1a866534f516e2',
      sku: 'fnw-kiwi-3',
      id: '5b6c6a7f01a7c38429530883'
    };
    spyOn(apiDataService, 'addProductsToCart').and.callThrough();
    component.addProductToCart(product);
    expect(apiDataService.addProductsToCart).toHaveBeenCalled();
  });
});
