import { CartService } from "../../services/cart.service";
import { ServiceRegistry } from "../../services/index.services";
import { BaseComponent } from "../base/base.component";
import { CartSummaryItem } from "./cart-summary-item/cart-summary-item.component";
import cartSummaryTemplate from "./cart-summary.hbs";
import emptyCartTemplate from "./empty-cart.hbs";
import checkoutCartButtonTemplate from "./checkout-cart-button.hbs";
import "./styles.scss";

export class CartSummary extends BaseComponent {
  constructor(args, props) {
    super(args, props);
  }

  preRender() {
      this.shoppongCartTemplate = "<span class='align-center'>Start Shopping</span>";
    this.cartViewItems = new Map();
    this.cartService = ServiceRegistry.getService(CartService);
    this.subscriptions.push(
      this.cartService.cartSubject.subscribe((items) => {
        this.count = [...items.values()].flat().length;
        this.countRef.innerHTML = this.getCountText();
        this.cartCheckoutBtn.innerHTML =
          this.count === 0
            ? this.shoppongCartTemplate
            : checkoutCartButtonTemplate({
                totalPrice: this.getTotalPrice(items),
              });
        this.setupCartViewItems(items);
        this.cartViewItemRef.innerHTML = this.renderCartViewItems();
        super.postRender();
      })
    );
    this.setupCartViewItems(this.cartService.getAllItems());
    this.count = [...this.cartService.getAllItems().values()].flat().length;
  }

  setupCartViewItems(items) {
    const keys = [...items.keys()];
    keys.forEach((k) => {
      if (!this.cartViewItems.has(k)) {
        this.cartViewItems.set(
          k,
          new CartSummaryItem(this.handleBars, items.get(k)[0])
        );
      } else {
        this.cartViewItems.get(k).preRender();
      }
    });

    const currentKeys = [...this.cartViewItems.keys()];
    currentKeys.forEach((ck) => {
      if (!items.has(ck)) {
        const csi = this.cartViewItems.get(ck);
        csi.onDispose();
        this.cartViewItems.delete(ck);
      }
    });
  }

  getTotalPrice(items) {
    return [...items.values()]
      .map((e) => e[0].price * e.length)
      .reduce((a, c) => a + c, 0);
  }

  renderCartViewItems() {
    const values = [...this.cartViewItems.values()];
    if (values.length > 0) {
      this.viewTemplates = values;
      return values.map((e) => e.render()).join("");
    }
    return emptyCartTemplate();
  }

  getCountText() {
    return this.count === 1 ? "(1 Item)" : `(${this.count} Items)`;
  }

  render() {
    return cartSummaryTemplate({
      cartItems: this.renderCartViewItems(),
      count: this.getCountText(),
      buttonTemplate: this.count > 0 ? checkoutCartButtonTemplate({
        totalPrice: this.getTotalPrice(this.cartService.getAllItems()),
      }) : this.shoppongCartTemplate,
    });
  }

  postRender() {
    super.postRender();
    this.countRef = document.querySelector("[hbs-id='cart-summary-count']");
    this.cartCheckoutBtn = document.querySelector(
      '[hbs-id="cart-checkout-button"]'
    );
    this.cartViewItemRef = document.querySelector(
      "[hbs-id='cart-view-items-ref']"
    );
  }
}
