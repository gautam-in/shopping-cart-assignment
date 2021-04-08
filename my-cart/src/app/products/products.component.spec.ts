import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { BackendInteractionService } from '../backend-interaction.service';
import { Product } from '../model/Products.model';
import { StoreStub } from '../testing/store.stub';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let backEndInteractionSpy:any;
  const products:Product[] =
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

  beforeEach(async () => {
    backEndInteractionSpy = jasmine.createSpyObj('BackendInteractionService',['getProducts'])
    backEndInteractionSpy.getProducts.and.returnValue(products);
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductsComponent ,
        {provide: BackendInteractionService, useValue: backEndInteractionSpy},
        {provide: Store, useClass : StoreStub}
      ]
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

  it('Should receive products', () => {
    expect(component).toBeTruthy();
  });
});
