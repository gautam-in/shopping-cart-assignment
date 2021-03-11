import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ApidataService } from '../services/apidata.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let apiDataService: ApidataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent],
      providers: [ApidataService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    apiDataService = TestBed.inject(ApidataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit method', () => {
    spyOn(component, 'getAllProducts').and.callThrough();
    component.ngOnInit();
    expect(component.getAllProducts).toHaveBeenCalled();
  });

  it('should call getAllProducts method', () => {
    spyOn(apiDataService, 'getProducts').and.callThrough();
    component.getAllProducts();
    expect(apiDataService.getProducts).toHaveBeenCalled();
  });

});
