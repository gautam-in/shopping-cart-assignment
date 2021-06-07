import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatDialog } from '@angular/material/dialog';

describe('AppComponent', () => {
  beforeEach(async () => {
    const a = setup().default();
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).configureTestingModule({ providers: [{ provide: Store<AppState>, useValue: a.store },
            { provide: MatDialog, useValue: a.dialog }] }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shopping-cart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shopping-cart');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('shopping-cart app is running!');
  });
    it('when openCart is called it should', () => {
        // arrange
        const { build } = setup().default();
        const a = build();
        // act
        a.openCart();
        // assert
        // expect(a).toEqual
    });
    it('when logout is called it should', () => {
        // arrange
        const { build } = setup().default();
        const a = build();
        // act
        a.logout();
        // assert
        // expect(a).toEqual
    });
});

function setup() {
    const store = autoSpy(Store<AppState>);
    const dialog = autoSpy(MatDialog);
    const builder = {
        store,
        dialog,
        default() {
            return builder;
        },
        build() {
            return new AppComponent(store, dialog);
        }
    }
    return builder;
}