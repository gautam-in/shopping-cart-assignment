import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { SeoService } from 'src/app/core/services/seo.service';
import { autoSpy } from 'auto-spy';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    }).configureTestingModule({ providers: [{ provide: Store<AppState>, useValue: a.store },
            { provide: SeoService, useValue: a.seo }] })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const p = build();
        // act
        p.ngOnInit();
        // assert
        // expect(p).toEqual
    });
    it('when buyProduct is called it should', () => {
        // arrange
        const { build } = setup().default();
        const p = build();
        // act
        p.buyProduct();
        // assert
        // expect(p).toEqual
    });
    it('when onDelete is called it should', () => {
        // arrange
        const { build } = setup().default();
        const p = build();
        // act
        p.onDelete();
        // assert
        // expect(p).toEqual
    });
});

function setup() {
    const store = autoSpy(Store<AppState>);
    const seo = autoSpy(SeoService);
    const builder = {
        store,
        seo,
        default() {
            return builder;
        },
        build() {
            return new ProductListComponent(store, seo);
        }
    }
    return builder;
}