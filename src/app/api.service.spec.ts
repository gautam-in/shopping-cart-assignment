import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let apiService: ApiService;
  let http: HttpClient;
  let httpSpy: { get: jasmine.Spy,  post: jasmine.Spy};
  // let httpController: HttpTestingController;
  
  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get', 'post'])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService,{provide: HttpClient, useValue: httpSpy}],
    });
    apiService = TestBed.inject(ApiService);
    http = TestBed.inject(HttpClient);
    // httpController = TestBed.inject(HttpTestingController);
  });

  it('Apiservice should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('call getapi', fakeAsync(() => {
    httpSpy.get.and.callThrough()
    apiService.getApi('category', {id: 1})
    expect(httpSpy.get).toHaveBeenCalled();
    tick();
  }) );

  it('call postapi', fakeAsync(() => {
    httpSpy.post.and.callThrough()
    apiService.postApi('addToCart', {})
    expect(httpSpy.post).toHaveBeenCalled();
    tick();
  }) );
});
