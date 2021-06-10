import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockHomeService } from 'src/app/mock/services/home.service.mock';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeService } from '../../services/home.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, SharedModule],
      declarations: [HomeComponent],
      providers: [
        { provide: HomeService, useClass: MockHomeService },
        { provide: CategoryService, userClass: CategoryService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
