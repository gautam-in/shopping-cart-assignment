import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { cartReducer } from 'src/app/features/cart/store/reducer/cart.reducer';
import { MockActivatedRoute } from '../../mock/routes/activated.route';
import { MockProductService } from '../../mock/services/product.service';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ToastrModule.forRoot(),
        StoreModule.forRoot({ cartList: cartReducer }),
        RouterTestingModule.withRoutes([
          {
            path: 'products',
            children: [
              {
                path: ':id',
                component: ProductListComponent,
              },
            ],
          },
        ]),
      ],
      declarations: [ProductListComponent, ProductItemComponent, SidebarComponent],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
