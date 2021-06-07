import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { autoSpy } from 'auto-spy';
import { AppState } from 'src/app/store/app.reducer';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
    })
      .configureTestingModule({
        providers: [
          { provide: Store, useValue: a.store },
          { provide: MatDialogRef, useValue: a.dialogRef },
        ],
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.ngOnInit();
    // assert
    // expect(c).toEqual
  });
  it('when closeDialog is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.closeDialog();
    // assert
    // expect(c).toEqual
  });
  it('when removeProductFromCart is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    // c.removeProductFromCart();
    // assert
    // expect(c).toEqual
  });
  it('when addProductsToCart is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    // c.addProductsToCart();
    // assert
    // expect(c).toEqual
  });
  it('when placeOrder is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.placeOrder();
    // assert
    // expect(c).toEqual
  });
});

function setup() {
  let ref: MatDialogRef<CartComponent>;
  const store = autoSpy(Store);
  const dialogRef = autoSpy(MatDialogRef);
  const builder = {
    store,
    dialogRef,
    default() {
      return builder;
    },
    build() {
      return new CartComponent(store, dialogRef);
    },
  };
  return builder;
}
