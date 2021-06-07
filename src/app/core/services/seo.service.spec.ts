import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { SeoService } from './seo.service';
import { autoSpy } from 'autoSpy';

describe('SeoService', () => {
  it('when setMetaData is called it should', () => {
    // arrange
    const { build } = setup().default();
    const s = build();
    // act
    s.setMetaData();
    // assert
    // expect(s).toEqual
  });
  
});

function setup() {
  const title = autoSpy(Title);
const meta = autoSpy(Meta);
const loc = autoSpy(Location);
const platformId = autoSpy(Object);
  const builder = {
    title,
meta,
loc,
platformId,
    default() {
      return builder;
    },
    build() {
      return new SeoService(title,meta,loc,platformId);
    }
  };

  return builder;
}
