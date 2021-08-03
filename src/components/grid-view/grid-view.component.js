import { BaseComponent } from "../base/base.component";
import gridTemplate from "./grid-view.hbs";
import { ServiceRegistry } from "./../../services/index.services";
import "./styles.scss";
import { ProductsService } from "../../services/products.service";
import { CartService } from "../../services/cart.service";
import { ProductCardComponent } from "../product-card/product-card.component";

export class GridViewComponent extends BaseComponent {
  containerRef = null;

  constructor(args, props) {
    super(args, props);
    this.cartService = ServiceRegistry.getService(CartService);
  }

  preRender() {
    this.productCards = this.props?.map(p => new ProductCardComponent(this.handleBars, p));
    this.viewTemplates = this.productCards;
  }

  render() {
    return gridTemplate({
      products: this.productCards?.map((p, _i) => p.render()).join(''),
    });
  }
}
