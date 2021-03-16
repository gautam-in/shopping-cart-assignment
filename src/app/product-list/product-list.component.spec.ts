import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueService } from '../services/catalogue.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let catalogueService: CatalogueService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent],
      providers: [CatalogueService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    catalogueService = TestBed.inject(CatalogueService);
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
    spyOn(catalogueService, 'getProducts').and.callThrough();
    component.getAllProducts();
    expect(catalogueService.getProducts).toHaveBeenCalled();
  });

});
