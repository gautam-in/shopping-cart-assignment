import { HttpClientModule } from '@angular/common/http';
import { ApidataService } from './../../Services/apidata.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let apiDataService: ApidataService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
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
    spyOn(apiDataService, 'addProductsToCart').and.callThrough();
    component.addProductToCart({});
    expect(apiDataService.addProductsToCart).toHaveBeenCalled();
  });
});
