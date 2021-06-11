import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SeoService } from 'src/app/core/services/seo.service';
import { CarouselModule } from 'src/app/shared/modules/carousel/carousel.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;
  const initialState = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        SharedModule,
        CarouselModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [
        SeoService,
        provideMockStore({ initialState }),
        {
          provide: PLATFORM_ID,
          useValue: 'browser',
        },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    store = TestBed.inject(MockStore);

    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const seoServiceStub: SeoService =
        fixture.debugElement.injector.get(SeoService);
      component.ngOnInit();
      expect(document.title).toBe('Sabka Bazar | Home');
    });
  });
});
