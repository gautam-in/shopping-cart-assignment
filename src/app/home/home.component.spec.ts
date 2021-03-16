import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './../product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [CatalogueService, NgbCarouselModule],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([
        { path: 'products', component: ProductListComponent }
      ])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
