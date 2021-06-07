import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { SeoService } from 'src/app/core/services/seo.service';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { autoSpy } from 'auto-spy';
import { AppState } from 'src/app/store/app.reducer';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
    })
      .configureTestingModule({
        providers: [
          { provide: FormBuilder, useValue: a.fb },
          { provide: Store, useValue: a.store },
          { provide: SeoService, useValue: a.seo },
        ],
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const r = build();
    // act
    r.ngOnInit();
    // assert
    // expect(r).toEqual
  });
  it('when ngAfterViewInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const r = build();
    // act
    r.ngAfterViewInit();
    // assert
    // expect(r).toEqual
  });
  it('when submitRegistrationForm is called it should', () => {
    // arrange
    const { build } = setup().default();
    const r = build();
    // act
    r.submitRegistrationForm();
    // assert
    // expect(r).toEqual
  });
  it('when passwordConfirming is called it should', () => {
    // arrange
    const { build } = setup().default();
    const r = build();
    // act
    // r.passwordConfirming();
    // assert
    // expect(r).toEqual
  });
  it('when onHandleError is called it should', () => {
    // arrange
    const { build } = setup().default();
    const r = build();
    // act
    r.onHandleError();
    // assert
    // expect(r).toEqual
  });
});

function setup() {
  const fb = autoSpy(FormBuilder);
  const store = autoSpy(Store);
  const seo = autoSpy(SeoService);
  const builder = {
    fb,
    store,
    seo,
    default() {
      return builder;
    },
    build() {
      return new RegisterComponent(fb, store, seo);
    },
  };
  return builder;
}
