import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CartService } from './../../../shared/services/cart.service';
import { By } from 'protractor';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA],
      providers:[CartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return count from user service',()=>{
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    let service = fixture.debugElement.injector.get(CartService);
    fixture.detectChanges();
    expect(service.cartCount).toBeDefined();
    expect(service.cartCount).toBeTruthy();
  })

  // it('should contain 0 items if count is "0"',()=>{
  //   fixture = TestBed.createComponent(HeaderComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   component.cartCount = 0;
  //   expect(compiled.queryAll(By.className('cart-items'))[1]).toContain("0 items");
  // })
});
