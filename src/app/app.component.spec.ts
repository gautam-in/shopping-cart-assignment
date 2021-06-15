import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenav } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { noop } from 'rxjs';
import { AppComponent } from './app.component';
import { Constants } from './core/common/constants/constants';
import { MaterialModule } from './shared/modules/material.module';
import { SharedModule } from './shared/shared.module';
import { AppEffectModule } from './store/effects/app.effects.module';
import { appReducer } from './store/reducers/app.reducer';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;
  const initialState = {};
  let sideNav: MatSidenav;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: MatSidenav,
          useValue: jasmine.createSpyObj(MatSidenav, [
            'close',
            'toggle',
            'open',
          ]),
        },
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.inject(MockStore);
    sideNav = TestBed.inject(MatSidenav);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const storeStub: MockStore = fixture.debugElement.injector.get(MockStore);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.logout();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('should assign sideNav ref', () => {
      let router = TestBed.inject(Router);

      Constants.SIDENAV = sideNav;
      fixture.detectChanges();
      console.log(sideNav);
      component.ngOnInit();
      expect(component.sideNav).toBeTruthy();
      router.navigate(['/'], {
        queryParams: {
          categoryId: '5b6899953d1a866534f516e2',
        },
      });
    });
  });

  describe('closeNav', () => {
    it('should call closenav', () => {
      Constants.SIDENAV = sideNav;
      component.closeNav();
      expect(Constants.SIDENAV.close).toHaveBeenCalled();
    });
  });
});
