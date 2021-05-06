import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmptyCartComponent } from './empty-cart.component';

describe('EmptyCartComponent', () => {
  let component: EmptyCartComponent;
  let fixture: ComponentFixture<EmptyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyCartComponent],
      imports: [RouterTestingModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
