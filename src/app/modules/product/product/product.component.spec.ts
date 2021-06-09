import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductComponent } from './product.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: MockStore;
  const initialState = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductComponent],
      providers: [
        MediaObserver,
        provideMockStore({ initialState }),
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: jasmine.createSpyObj(ActivatedRoute, ['snapshot']),
        },
      ],
    });
    fixture = TestBed.createComponent(ProductComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isMobile has default value`, () => {
    expect(component.isMobile).toEqual(false);
  });

  describe('changeFilter', () => {
    it('makes expected calls', () => {
      const matSelectChangeStub: MatSelectChange = <any>{ value: -1 };
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      component.changeFilter(matSelectChangeStub);
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
