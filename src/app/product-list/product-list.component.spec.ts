import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ConstantsService } from './../shared/services/constants.service';
import { CartService } from './../shared/services/cart.service';
import { ApiService } from './../shared/services/api.service';

import { Observable, from } from 'rxjs';
import 'rxjs/add/observable/from';



describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientModule],


    declarations: [ ProductListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers:[ConstantsService, CartService, ApiService ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should return category list',()=>{
  //   let service = TestBed.get(ApiService);
  //   var o = from([ [1,2,3]])
  //   spyOn(service,'getCategories')
  //   fixture.detectChanges();
  //   expect(component.categoryList.length).toBe(3);
  // })
});
