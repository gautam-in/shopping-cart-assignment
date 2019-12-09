import { TestBed, inject, async } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(async() => TestBed.configureTestingModule({
    imports:[HttpClientModule, HttpClientTestingModule],
    providers:[ConstantsService,ApiService]
  }).compileComponents());


  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

});
