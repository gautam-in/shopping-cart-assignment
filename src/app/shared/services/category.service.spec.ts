import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ICategory } from '../models/category.model';

import { CategoryService } from './category.service';

fdescribe('CategoryService', () => {
  let service: CategoryService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });
    service = TestBed.inject(CategoryService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllCategories method', (done: DoneFn) => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getAllCategories().subscribe((value) => {
      expect(value).toEqual([]);
      done();
    });
  });
});
