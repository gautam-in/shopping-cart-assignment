import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ToastrModule } from 'ngx-toastr';
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppState } from './store/app.reducer';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxUiLoaderModule,
        NgxUiLoaderHttpModule,
        NgxUiLoaderRouterModule,
        ToastrModule.forRoot(),
        CoreModule,
        HttpClientModule,
      ],
      declarations: [AppComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    store.setState({
      auth: { authError: 'error', user: null, loading: false },
      cartList: { cart: [] },
    });
    fixture.detectChanges();
    
  });

  it('should create the app', () => {
    const storeSpy = spyOn(store, 'dispatch');
    expect(component).toBeTruthy();
  });

  it(`should have as title 'sabkabazar'`, () => {
    const storeSpy = spyOn(store, 'dispatch');
    expect(component.title).toEqual('sabkabazar');
  });
});
