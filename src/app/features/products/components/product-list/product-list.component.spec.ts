import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { mockUser } from 'src/app/auth/mock/user.mock';
import { mockCart } from 'src/app/mock/cart.mock';
import { mockCategories } from 'src/app/shared/mock/category.mock';
import { MockCategoryService } from 'src/app/shared/mock/category.service.mock';
import { CategoryService } from 'src/app/shared/services/category.service';
import { AppState } from 'src/app/store/app.reducer';
import { MockActivatedRoute } from '../../mock/routes/activated.route';
import { MockProductService } from '../../mock/services/product.service.mock';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let activatedRoute: ActivatedRoute;
  let router: Router;
  let store: MockStore<AppState>;
  const initialState: AppState = {
    auth: {
      user: mockUser,
      authError: '',
      loading: false,
    },
    cartList: {
      cart: [mockCart],
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ToastrModule.forRoot(),
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
      declarations: [
        ProductListComponent,
        ProductItemComponent,
        SidebarComponent,
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: CategoryService, useClass: MockCategoryService },
        { provide: ProductService, useClass: MockProductService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load all products when category id is not present in route', () => {
    activatedRoute.params = of({ id: 'test' });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('change category from drop down should navigate to category route', () => {
    const spy = spyOn(router, 'navigate');
    component.categories = [...mockCategories];
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('select')
    ).nativeElement;
    select.value = '5b675e5e5936635728f9fc30';
    select.dispatchEvent(new Event('change'));
    expect(component.defaultCategory).toEqual('');
    expect(spy).toHaveBeenCalled();
  });

  it('change category from drop down to select category should show all products', () => {
    const spy = spyOn(router, 'navigate');
    component.categories = [...mockCategories];
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('select')
    ).nativeElement;
    select.value = '';
    select.dispatchEvent(new Event('change'));
    expect(component.defaultCategory).toEqual('');
    expect(spy).toHaveBeenCalled();
  });

  it('should load products based on route param category id', () => {
    activatedRoute.params = of({ id: '5b6899953d1a866534f516e2' });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
