import { ComponentFixture, TestBed } from '@angular/core/testing';
import { autoSpy } from 'auto-spy';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    }).configureTestingModule({ providers: [{ provide: Store<AppState>, useValue: a.store }] })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
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
});

function setup() {
    const store = autoSpy(Store<AppState>);
    const builder = {
        store,
        default() {
            return builder;
        },
        build() {
            return new ProductComponent(store);
        }
    }
    return builder;
}