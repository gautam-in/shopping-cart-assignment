import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SeoService } from '../core/services/seo.service';
import { Store } from '@ngrx/store';
import { autoSpy } from 'auto-spy';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    }).configureTestingModule({ providers: [{ provide: Store<fromApp.AppState>, useValue: a.store },
            { provide: SeoService, useValue: a.seo }] })
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
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const h = build();
        // act
        h.ngOnInit();
        // assert
        // expect(h).toEqual
    });
});

function setup() {
    const store = autoSpy(Store<fromApp.AppState>);
    const seo = autoSpy(SeoService);
    const builder = {
        store,
        seo,
        default() {
            return builder;
        },
        build() {
            return new HomeComponent(store, seo);
        }
    }
    return builder;
}