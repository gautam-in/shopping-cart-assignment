import { CartService } from "../../services/cart.service";
import { BaseComponent } from "../base/base.component";
import { AddRemoveItemComponent } from "../shared/add-remove-item/add-remove-item.component";
import { ServiceRegistry } from "./../../services/index.services";
import productCardTemplate from "./hbs/product-card.hbs";
import "./styles.scss";

export class ProductCardComponent extends BaseComponent {
  constructor(args, props) {
    super(args, props);
  }

  preRender() {
    this.cartService = ServiceRegistry.getService(CartService);
    this.selectedItems = this.cartService.getCurrentItems(this.props.id);
    this.addRemoveItemComponent = new AddRemoveItemComponent(
      this.handleBars,
      {...this.props, eventId: `product-card-${this.props.id}`}
    );
    this.viewTemplates = [this.addRemoveItemComponent];
    this.subscriptions.push(this.cartService.notifyMe(this.props.id).subscribe((items) => {
      this.selectedItems = items;
      this.setView();
    }));
  }

  setView() {
    if (!this.addButtonRef || !this.addRemoveRef) {
      return;
    }
    if (this.selectedItems.length > 0) {
      this.addButtonRef.style.display = 'none';
      this.addRemoveRef.style.display = 'flex';
    } else {
      this.addRemoveRef.style.display = 'none';
      this.addButtonRef.style.display = 'inline-block';
    }
  }

  render() {
    return productCardTemplate({
      product: this.props,
      addRemoveItem: this.addRemoveItemComponent.render(),
    });
  }

  postRender() {
    if (this.props?.id) {
      this.addRemoveRef = document.getElementById(`add-remove-item-ref-${this.props.id}`);
      this.addButtonRef = document.getElementById(this.props.id);
      this.addButtonRef.onclick = () => {
        this.addRemoveItemComponent.addItem();
      };
      this.setView();
    }
    super.postRender();
  }
}
