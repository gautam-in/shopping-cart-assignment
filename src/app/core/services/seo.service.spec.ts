import { Location } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SeoService,
        { provide: Meta, useClass: Meta },
        { provide: Title, useClass: Title },
        { provide: Location, useClass: Location },
        {
          provide: PLATFORM_ID,
          useValue: 'browser',
        },
      ],
    });
    service = TestBed.inject(SeoService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`firstTime should be true`, () => {
    expect(service.firstTime).toEqual(true);
  });

  it(`setMetaData should be called`, () => {
    service.firstTime = true;
    service.setMetaData('Title', 'Keyword', 'Description');
    expect(service.firstTime).toEqual(false);
    expect(document.title).toBe('Title');
  });

  it(`updateMetaData should be called`, () => {
    service.firstTime = false;
    service.setMetaData('Title', 'Keyword', 'Description');
    expect(document.title).toBe('Title');
  });
});
