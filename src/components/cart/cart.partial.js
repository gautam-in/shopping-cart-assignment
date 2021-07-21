import { CartService } from "../../services/cart.service";
import { ServiceRegistry } from "../../services/index.services";
import { BaseComponent } from "../base/base.component";
import { CartSummary } from "../cart-summary/cart-summary.component";
import cartTemplate from "./hbs/cart.hbs";
import "./styles.scss";

export class CartPartial extends BaseComponent {
  constructor(args, props) {
    super(args, props);
  }

  preRender() {
    this.showCartSummary = false;
    this.cartService = ServiceRegistry.getService(CartService);
    if (!this.props) {
      this.props = {
        totalItems: `0 Items`,
      };
    }

    this.subscriptions.push(
      this.cartService.cartSubject.subscribe((cartItems) => {
        this.renderTotalItems(cartItems);
      })
    );
  }

  renderTotalItems(cartItems) {
    const items = [...cartItems?.values()].flat();
    this.totalItemsRef.innerHTML =
      items.length === 1 ? `1 Item` : `${items.length} Items`;
  }

  render() {
    return cartTemplate({
      totalItems: this.props.totalItems,
    });
  }

  toggleCartSummary() {
    this.showCartSummary = !this.showCartSummary;
    this.cartSummaryRef.classList.toggle("show");
    if (this.viewTemplates.length > 0) {
      const cs = this.viewTemplates.pop();
      cs.onDispose();
    }
    if (this.showCartSummary) {
      const cs = new CartSummary(this.handleBars);
      this.rerender(this.cartSummaryRef, cs);
      this.viewTemplates.push(cs);
    }
  }

  postRender() {
    super.postRender();
    this.cartContainerRef = document.querySelector('[hbs-id="cart-container"]');
    this.totalItemsRef = document.querySelector('[hbs-id="totalItems"]');
    this.cartSummaryRef = document.querySelector('[hbs-id="cart-summary"]');

    this.cartSummaryRef.onclick = (e) => {
      if (e.target === this.cartSummaryRef) {
        this.toggleCartSummary();
      }
    };

    this.cartContainerRef.onclick = () => {
      this.toggleCartSummary();
    };
  }
}
