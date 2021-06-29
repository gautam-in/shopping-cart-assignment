import { TestBed } from '@angular/core/testing';
import { ProductRoutingModule } from './product.routing.module';

describe('ProductRoutingModule', () => {
  let pipe: ProductRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProductRoutingModule] });
    pipe = TestBed.inject(ProductRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
