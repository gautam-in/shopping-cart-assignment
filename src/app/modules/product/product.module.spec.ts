import { TestBed } from '@angular/core/testing';
import { ProductModule } from './product.module';

describe('ProductModule', () => {
  let pipe: ProductModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProductModule] });
    pipe = TestBed.inject(ProductModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
