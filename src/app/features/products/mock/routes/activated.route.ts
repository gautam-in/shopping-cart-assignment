import { of } from 'rxjs';

export class MockActivatedRoute {
  get params() {
    return of({
      id: '',
    });
  }
}