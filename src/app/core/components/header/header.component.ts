import {
  Component,
  ComponentFactoryResolver,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Constants } from 'src/app/core/common/constants/constants';
import { AppState } from 'src/app/models/app-state.model';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';
import { PlaceholderDirective } from 'src/app/shared/directive/placeholder/placeholder.directive';
import { CartState } from 'src/app/shared/models/cart-state.model';
import { fetchLocalCart } from 'src/app/shared/store/actions/cart-list.actions';
import { CartActions } from 'src/app/shared/store/actions/cartlist.actions.types';
import { selectCartState } from 'src/app/shared/store/selectors/cart.selectors';
import { AuthState } from '../../models/auth-state.model';
import { AuthActions } from '../../store/actions/action-types';
import { selectAuthState } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cart$!: Observable<CartState>;
  user$!: Observable<AuthState>;
  private closeSub!: Subscription;
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost!: PlaceholderDirective;
  isMobile = false;

  constructor(
    private store: Store<AppState>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private media: MediaObserver
  ) {
    this.cart$ = this.store.pipe(select(selectCartState));
    this.user$ = this.store.pipe(select(selectAuthState));
    this.store.dispatch(AuthActions.autoLogin());
    this.store.dispatch(CartActions.fetchLocalCart());
    this.media.asObservable().subscribe((e) => {
      this.isMobile = media.isActive('lt-xs');
    });
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  showCart(targetRef: HTMLElement) {
    const cartCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(CartComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(cartCmpFactory);
    this.renderer.setStyle(
      componentRef.location.nativeElement,
      'position',
      'fixed'
    );
    this.renderer.setStyle(
      componentRef.location.nativeElement,
      'z-index',
      '110'
    );
    if (!this.isMobile) {
      let { top, height, right } = targetRef.getBoundingClientRect();
      this.renderer.setStyle(
        componentRef.location.nativeElement,
        'top',
        `${top + height}px`
      );

      this.renderer.setStyle(
        componentRef.location.nativeElement,
        'right',
        `${window.innerWidth - right}px`
      );
    } else {
      this.renderer.addClass(componentRef.location.nativeElement, 'mb-overlay');
    }

    // componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  toggleSideNav() {
    Constants.SIDENAV?.toggle();
  }
}
