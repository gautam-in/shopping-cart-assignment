import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CartService } from './../../../shared/services/cart.service';
import { By } from '@angular/platform-browser';
import { CartComponent } from 'src/app/cart/cart.component';

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



  it("cart should contain cart items",()=>{
    component.cartCount = 5;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.cart-items'));
    
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain("5");
  })

});
