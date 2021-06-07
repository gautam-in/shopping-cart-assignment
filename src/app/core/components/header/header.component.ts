import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';
import { PlaceholderDirective } from 'src/app/shared/directive/placeholder/placeholder.directive';
import { CartState } from 'src/app/shared/models/cart-state.model';

import { FetchLocalCart } from 'src/app/shared/store/actions/cart-list.actions';
import { AuthState } from '../../models/auth-state.model';
import { AutoLogin, Logout } from '../../store/actions/auth.actions';
import { MediaObserver } from '@angular/flex-layout';
import { Constants } from 'src/app/core/common/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  cart$!: Observable<CartState>;
  user$!: Observable<AuthState>;
  isCartOpen = false;
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
    this.cart$ = this.store.select('cart');
    this.user$ = this.store.select('auth');
    this.store.dispatch(new AutoLogin());
    this.store.dispatch(new FetchLocalCart());
    this.media.asObservable().subscribe((e) => {
      this.isMobile = media.isActive('lt-xs');
    });
  }

  openCart(data: boolean) {
    this.isCartOpen = data;
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  ngAfterViewInit() {}
  showCart(targetRef: HTMLElement) {
    // const alertCmp = new AlertComponent();
    const alertCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(CartComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
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
    Constants.SIDENAV.toggle();
  }
}
