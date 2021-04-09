import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StoreStub } from '../testing/store.stub';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      providers: [{ provide: Store, useClass: StoreStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
