import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
describe('InMemoryDataService', () => {
  let service: InMemoryDataService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InMemoryDataService]
    });
    service = TestBed.inject(InMemoryDataService);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
