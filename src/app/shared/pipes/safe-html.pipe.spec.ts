import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;

  beforeEach(() => {
    const domSanitizerStub = () => ({
      bypassSecurityTrustHtml: (value: any) => value,
      bypassSecurityTrustStyle: (value: any) => value,
      bypassSecurityTrustScript: (value: any) => value,
      bypassSecurityTrustUrl: (value: any) => value,
      bypassSecurityTrustResourceUrl: (value: any) => value,
    });
    TestBed.configureTestingModule({
      providers: [
        SafeHtmlPipe,
        { provide: DomSanitizer, useFactory: domSanitizerStub },
      ],
    });
    pipe = TestBed.inject(SafeHtmlPipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  for (let argEle of [
    'html',
    'style',
    'script',
    'url',
    'resourceUrl',
    'default',
  ]) {
    it('transforms X to X', () => {
      const value: any = 'X';
      expect(pipe.transform(value, argEle)).toEqual(pipe.transform(value));
    });
  }
});
