import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs/internal/observable/of';
import { ApiService } from '../api.service';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let apiServiceSpy: { getApi: jasmine.Spy };
  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj(ApiService, ['getApi']);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, NgbDropdownModule],
      declarations: [ ProductComponent ],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check data', () => {
    let productFakeData = [
      {
        "name": "Tata Tea Gold Leaf Tea, 500 gm",
        "imageURL": "/static/images/products/beverages/tata-tea.jpg",
        "description": "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
        "price": 165,
        "stock": 50,
        "category": "5b675e5e5936635728f9fc30",
        "sku": "bev-tata-tea-500",
        "id": "5b6c6f4a01a7c3842953088c"
      },
      {
        "name": "Red Label Tea, 500 gm Carton",
        "imageURL": "/static/images/products/beverages/red-label.jpg",
        "description": "Brooke Bond Red Label is one of Indias largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality leaves.",
        "price": 205,
        "stock": 50,
        "category": "5b675e5e5936635728f9fc30",
        "sku": "bev-red-label-500",
        "id": "5b6c6f8301a7c3842953088d"
      }
    ]
    let categoryFakeData = [
      {
        "name": "Beverages",
        "key": "beverages",
        "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        "enabled": true,
        "order": 3,
        "imageUrl": "/static/images/category/beverages.png",
        "id": "5b675e5e5936635728f9fc30"
      }
    ]
    apiServiceSpy.getApi.withArgs('products').and.returnValue(of(productFakeData))
    apiServiceSpy.getApi.withArgs('category').and.returnValue(of(categoryFakeData))
    component.currentCategoryId = '5b675e5e5936635728f9fc30';
    fixture.detectChanges();
    expect(apiServiceSpy.getApi).toHaveBeenCalled();
    expect(component.catgoryData).toEqual(categoryFakeData);
    expect(component.allProductData).toEqual(productFakeData);
    const activeCategory = fixture.debugElement.query(By.css('a.list-group-item.list-group-item-action.active')).nativeElement;
    activeCategory.click();
    fixture.detectChanges();
    expect(component.selectedCategoryName).toBe('');
  });
});
