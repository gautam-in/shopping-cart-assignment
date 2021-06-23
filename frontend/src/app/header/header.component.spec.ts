import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from '../services/data.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const dataService = jasmine.createSpyObj('DataService', {
    getselectedProdustsLength: of(2),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {provide: DataService, useValue: dataService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button with products count', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('button').textContent).toContain('2 Items');
  });

  it('should emit openCart method', () => {
    spyOn(component.openCart, 'emit');

    component.openProductCart()

    expect(component.openCart.emit).toHaveBeenCalled();
  });
});
