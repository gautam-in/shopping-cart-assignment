import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    const storeStub = () => ({
      select: (string: any) => ({}),
      dispatch: (arg: any) => ({}),
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CartComponent],
      providers: [{ provide: Store, useFactory: storeStub }],
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`outSideClickedFirstTime has default value`, () => {
    expect(component.outSideClickedFirstTime).toEqual(false);
  });

  it(`inside has default value`, () => {
    expect(component.inside).toEqual(false);
  });

  describe('clickedOut', () => {
    it('makes expected calls', () => {
      spyOn(component, 'closeDialog').and.callThrough();
      component.clickedOut();
      expect(component.inside).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'select').and.callThrough();
      component.ngOnInit();
      expect(storeStub.select).toHaveBeenCalled();
    });
  });

  describe('placeOrder', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      spyOn(component, 'closeDialog').and.callThrough();
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.placeOrder();
      expect(component.closeDialog).toHaveBeenCalled();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });

  describe('addProductsToCart', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.addProductsToCart(0);
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });

  describe('removeProductFromCart', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.removeProductFromCart(0);
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });

  describe('closeDialog', () => {
    it('makes expected calls', () => {
      spyOn(component.close, 'emit').and.callThrough();
      component.closeDialog();
      expect(component.close.emit).toHaveBeenCalled();
    });
  });

  describe('clicked', () => {
    it('clicks inside component', () => {
      fixture.debugElement.nativeElement.dispatchEvent(new Event('click'));
      expect(component.inside).toBe(true);
    });
  });

  describe('clickedOut', () => {
    it('clicks on document', () => {
      document.dispatchEvent(new Event('click'));
      expect(component.inside).toBe(false);
    });
  });
});
