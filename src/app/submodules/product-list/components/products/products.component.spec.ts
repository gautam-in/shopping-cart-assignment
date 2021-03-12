import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service: any;
  beforeEach(async () => {
    const serviceSpy = jasmine.createSpyObj('InMemoryDataService', ['addToCart', 'productList', 'getCategoryData']);
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ProductsComponent ],
      providers: [{
        provide: InMemoryDataService, useValue:  serviceSpy
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(InMemoryDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
