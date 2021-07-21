import { CartService } from "../../../services/cart.service";
import { ServiceRegistry } from "../../../services/index.services";
import { BaseComponent } from "../../base/base.component";
import { AddRemoveItemComponent } from "../../shared/add-remove-item/add-remove-item.component";
import cartSummaryItemTemplate from "./cart-summary-item.hbs";
import "./styles.scss";

export class CartSummaryItem extends BaseComponent {
  constructor(args, props) {
    super(args, props);
  }

  preRender() {
    this.cartService = ServiceRegistry.getService(CartService);
    this.products = this.cartService.getCurrentItems(this.props.id);
    this.addRemoveCart = new AddRemoveItemComponent(this.handleBars, {
      ...this.props,
      eventId: `cart-card-${this.props.id}`,
    });
    this.viewTemplates = [this.addRemoveCart];
  }

  render() {
    return cartSummaryItemTemplate({
      product: this.products[0],
      addRemoveItem: this.addRemoveCart.render(),
      totalPrice: this.products.length * this.products[0].price
    });
  }

  postRender() {
    super.postRender();
    this.containerRef = document.querySelector('[hbs-id="cart-summary-total-price"]');
  }
}
