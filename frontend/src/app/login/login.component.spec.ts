import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [MatInputModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render login details', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.details h1').textContent).toContain('Login');
    expect(compiled.querySelector('.details p').textContent).toContain('Get access to your Orders. Wishlist and Recommendations.');
  });
});
