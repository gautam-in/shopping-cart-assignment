import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { EllipsisPipe } from 'src/app/shared/elipsis-pipe/ellipsis.pipe';
import { StoreStub } from 'src/app/testing/store.stub';
import { ProductItemComponent } from './product-item.component';



describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent , EllipsisPipe],
      providers : [{provide:Store,useClass:StoreStub}],
      schemas : [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
