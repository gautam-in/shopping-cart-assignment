import { ProductListComponent } from './../product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApidataService } from 'src/app/services/apidata.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ApidataService],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([
        { path: 'products', component: ProductListComponent}
    ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
