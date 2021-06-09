import { isPlatformBrowser, Location } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  firstTime: Boolean = true;

  constructor(
    private title: Title,
    private meta: Meta,
    private loc: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private updateMetaData(
    title: string,
    keyword: string,
    description: string,
    img_url: string,
    baseUrl: string
  ) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'keyword', content: keyword });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({
      name: 'og:description',
      property: 'og:description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og_url',
      property: 'og_url',
      content: baseUrl,
    });
    this.meta.updateTag({ name: 'og_image', content: img_url });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: img_url });
  }

  setMetaData(
    title: string,
    keyword: string,
    description: string,
    img_url: string = 'assets/images/logo_2x.png'
  ) {
    console.log(this.firstTime);
    let baseUrl = <any>this.loc;
    if (isPlatformBrowser(this.platformId)) {
      baseUrl = baseUrl?._platformStrategy?._platformLocation?.location?.href;
    } else {
      baseUrl = 'https://wwww.sabkabajar.com';
    }
    if (this.firstTime) {
      this.title.setTitle(title);
      this.meta.addTags([
        { property: 'og:title', content: title },
        {
          name: 'og:description',
          property: 'og:description',
          content: description,
        },
        { name: 'og_url', property: 'og_url', content: baseUrl },
        { name: 'og_image', content: img_url },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: img_url },
        { name: 'keyword', content: keyword },
        { name: 'description', content: description },
      ]);
      this.firstTime = false;
    } else {
      this.updateMetaData(title, keyword, description, img_url, baseUrl);
    }
    console.log(this.firstTime);
  }
}
