import { CartService } from "../../../services/cart.service";
import { ServiceRegistry } from "../../../services/index.services";
import { BaseComponent } from "../../base/base.component";
import addRemoveItemTemplate from "./add-remove-item.hbs";
import "./styles.scss";

export class AddRemoveItemComponent extends BaseComponent {
  
  constructor(args, props) {
    super(args, props);
  }

  preRender() {
    this.cartService = ServiceRegistry.getService(CartService);
    this.subscriptions.push(this.cartService.notifyMe(this.props.id).subscribe((items) => {
      this.rerender(this.containerRef, this);
    }));
  }

  addItem() {
    if (this.props.stock > this.cartService.getCurrentItems(this.props.id).length) {
      this.cartService.addToCart(this.props);
    }
  }

  removeItem() {
    if (this.cartService.getCurrentItems(this.props.id).length > 0) {
      this.cartService.removeFromCart(this.props);
    }
  }

  render() {
    return addRemoveItemTemplate({
      count : this.cartService.getCurrentItems(this.props.id).length,
      id: this.props.eventId
    }); 
  }

  postRender() {
    document.getElementById(`add-item-${this.props.eventId}`).onclick = () => this.addItem();
    document.getElementById(`remove-item-${this.props.eventId}`).onclick = () => this.removeItem();  
    this.containerRef = document.querySelector(`[hbs-id='add-remove-item-${this.props.eventId}']`).parentElement;
  }
}
