import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(private title: Title, private meta: Meta) {}

  setTitle(title: string, suffix = 'Sabka Bazaar') {
    this.title.setTitle(`${title} | ${suffix}`);
  }

  setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }
}
