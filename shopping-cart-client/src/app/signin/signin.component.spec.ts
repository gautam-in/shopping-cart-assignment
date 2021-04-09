import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
//   it("Check if credentials are valid", ()=>{
//     expect(component.test("abc@gmail.com",12345678)).toBe(true);
//  });
//  it("Check if credentials are valid", ()=> {
//     expect(component.test('','')).toBe(false);
//  });
//  it("Check if credentials are valid", ()=> {
//     expect(component.test("abc@gmail.com",'')).toBe(false);
//  });
//  it("Check if credentials are valid", ()=> {
//     expect(component.test("abc",12345678)).toBe(false);
//  });
//  it("Check if credentials are valid", ()=> {
//     expect(component.test("aac@gmail.com",12345678)).toBe(true);
//  });

 it("Check if credentials are valid", ()=> {
    expect(component.test("aac@gmail.com",123458)).toBe(true);
 });

});
