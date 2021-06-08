import { of } from 'rxjs';

export class MockActivatedRoute {
  private _params$ = of({
    id: '',
  });
  get params() {
    return this._params$;
  }

  set params(val) {
    this._params$ = val;
  }
}
