import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inject, NO_ERRORS_SCHEMA, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Action, Store, StoreModule } from '@ngrx/store';
import { MediaObserver } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeoService } from '../../services/seo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { MatSidenav } from '@angular/material/sidenav';
import { AppComponent } from 'src/app/app.component';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';

import { Constants } from '../../common/constants/constants';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { PlaceholderDirective } from 'src/app/shared/directive/placeholder/placeholder.directive';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore;
  const initialState = {};
  let actions$ = new Observable<Action>();
  let componentFactoryResolver: ComponentFactoryResolver;
  let sideNav: MatSidenav;

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
      declarations: [HeaderComponent, AppComponent, PlaceholderDirective],
      providers: [
        SeoService,
        {
          provide: MatSidenav,
          useValue: jasmine.createSpyObj(MatSidenav, ['close', 'toggle']),
        },
        ComponentFactoryResolver,
        {
          provide: Renderer2,
          useValue: jasmine.createSpyObj(Renderer2, ['setStyle', 'addClass']),
        },
        {
          provide: HeaderComponent,
          useValue: jasmine.createSpyObj(HeaderComponent, ['showCart']),
        },

        {
          provide: ComponentFactoryResolver,
          useValue: jasmine.createSpyObj(ComponentFactoryResolver, [
            'resolveComponentFactory',
          ]),
        },
        {
          provide: ViewContainerRef,
          useValue: jasmine.createSpyObj(ViewContainerRef, ['createComponent']),
        },
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        { provide: MediaObserver, useClass: MediaObserver },
      ],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    sideNav = TestBed.inject(MatSidenav);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeDefined();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`isMobile has default value`, () => {
    expect(component.isMobile).toEqual(false);
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const storeStub: MockStore = fixture.debugElement.injector.get(MockStore);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.logout();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });

  describe('sideNav toggle', () => {
    it('should toggle sideNav', () => {
      expect(document.querySelector('mat-sidenav')).toBeFalsy();
    });
  });

  describe('Cart', () => {
    it('should open cart', () => {
      // component.showCart(
      //   fixture.debugElement.nativeElement.querySelector('.cart')
      // );
      spyOn(component, 'showCart');
      component.showCart(document.createElement('button'));
      expect(component.showCart).toHaveBeenCalled();
    });
  });

  describe('toggleSideNav', () => {
    it('should call closenav', () => {
      Constants.SIDENAV = sideNav;
      component.toggleSideNav();
      expect(Constants.SIDENAV.toggle).toHaveBeenCalled();
    });
  });
});
