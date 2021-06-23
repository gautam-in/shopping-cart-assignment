import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ProductsComponent } from './products.component';
import { of } from 'rxjs';

const products = [
  {
    "name": "Fresho Kiwi - Green, 3 pcs",
    "imageURL": "/assets/images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-kiwi-3",
    "id": "5b6c6a7f01a7c38429530883",
    "count": 1,
  }
];

const categories = [
  {
    "name": "Beverages",
    "key": "beverages",
    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    "enabled": true,
    "order": 3,
    "imageUrl": "/assets/images/category/beverages.png",
    "id": "5b675e5e5936635728f9fc30"
  }
]

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  const apiservice = jasmine.createSpyObj('ApiService', {
    getCategories: of(categories),
    getProducts: of(products),
  });
  const dataService = jasmine.createSpyObj('DataService', {
    setSelectedCategory: of(null)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [{provide: ApiService, useValue: apiservice}],
      imports: [
        HttpClientModule,
        MatIconModule,
        MatButtonModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product details', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.top-nav-bar').textContent).toContain('All');
    expect(compiled.querySelector('.categories a').textContent).toContain('Beverages');
    expect(compiled.querySelector('.products h2').textContent).toContain('Fresho Kiwi - Green, 3 pcs');
    expect(compiled.querySelector('.description-buy-now .description').textContent).toContain('Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.');
    expect(compiled.querySelector('.description-buy-now .buy-now').textContent).toContain('Buy Now @ Rs87');
  });
});
