import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFactoryResolver,
  NO_ERRORS_SCHEMA,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  ComponentRef,
  EventEmitter,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { noop, Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';
import { PlaceholderDirective } from 'src/app/shared/directive/placeholder/placeholder.directive';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { Constants } from '../../common/constants/constants';
import { CoreModule } from '../../core.module';
import { SeoService } from '../../services/seo.service';
import { HeaderComponent } from './header.component';

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
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent, CartComponent],
      providers: [
        SeoService,
        {
          provide: MatSidenav,
          useValue: jasmine.createSpyObj(MatSidenav, ['close', 'toggle']),
        },
        {
          provide: Renderer2,
          useValue: jasmine.createSpyObj(Renderer2, ['setStyle', 'addClass']),
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
      let cfr = TestBed.inject(ComponentFactoryResolver);
      let pd: any = new PlaceholderDirective(
        jasmine.createSpyObj(ViewContainerRef, ['clear', 'createComponent'])
      );
      pd.viewContainerRef.createComponent.and.returnValue({
        location: {
          nativeElement: document.createElement('span'),
        },
        instance: {
          close: new EventEmitter(),
        },
      });
      component.alertHost = pd;
      component.showCart(document.createElement('button'));
      expect(cfr.resolveComponentFactory).toHaveBeenCalled();
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
