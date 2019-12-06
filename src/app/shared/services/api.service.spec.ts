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


  // it('should get banner data',()=>{
  //   service.getBanner('banners').subscribe((data:any)=>{
  //     console.log(data);
  //     expect(data.length).toBe(5)
  //   });
  //   const req = httpMock.expectOne(`http://localhost:3000/banners`, 'call to api');
  //   expect(req.request.method).toBe('GET');
  //   req.flush({banners:'banners'});

  //   httpMock.verify();
  // })


  
});
