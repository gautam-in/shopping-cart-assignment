import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(
    @Inject(DOCUMENT) private dom: any,
    private title: Title,
    private meta: Meta
  ) {}

  setTitle(title: string, suffix = 'Sabka Bazaar') {
    this.title.setTitle(`${title} | ${suffix}`);
  }

  setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateCanonicalUrl(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement =
      this.dom.querySelector(`link[rel='canonical']`) || null;
    if (element === null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', environment.hostname + url);
  }
}
