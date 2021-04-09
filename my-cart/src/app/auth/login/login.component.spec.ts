import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { ActivatedRouteStube } from 'src/app/testing/activated-route.stub';
import { StoreStub } from 'src/app/testing/store.stub';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let template: HTMLElement;
  let store: Store;
  let route: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: Store, useValue: StoreStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStube }
      ]
    }
    )
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement
    store = TestBed.inject(Store);
    route = TestBed.inject(ActivatedRoute) as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain heading Login and paragraph', () => {
    let loginHeadingText = 'Login';
    let loginParagraphText = 'Get Access to your Orders,Wishlist and Recommendations';
    let loginHeading = template.querySelector('.secondary-heading');
    let loginParagraph = template.querySelector('.secondary-paragraph');
    expect(loginHeading?.textContent).toEqual(loginHeadingText);
    expect(loginParagraph?.textContent).toBe(loginParagraphText)
  });

  it('it should get query parameters from activated route(Login)', fakeAsync(() => {
    route.setParamMap({ action: 'login' })
    component.getQueryParams();
    tick();
    expect(component.isLogin).toBe(true)
  }))

  it('it should get query parameters from activated route(SignUp)', fakeAsync(() => {
    route.setParamMap({ action: 'signUp' });
    component.getQueryParams()
    tick();
    expect(component.isLogin).toBe(false);
  }))

});
