import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ProductsComponent } from './products.component';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  const apiservice = jasmine.createSpyObj('ApiService', {
    getCategories: of([]),
    getProducts: of([]),
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
});
