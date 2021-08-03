import { BaseComponent } from "../base/base.component";
import productsTemplate from "./products.hbs";
import { ServiceRegistry } from "./../../services/index.services";
import "./styles.scss";
import { ProductsService } from "../../services/products.service";
import { CategoryService } from "../../services/category.service";
import { GridViewComponent } from "../grid-view/grid-view.component";

export class ProductsComponent extends BaseComponent {
  constructor(args, props) {
    super(args, props);
  }

  preRender() {
    this.gridView = new GridViewComponent(this.handleBars, []);
    this.viewTemplates = [];
    this.productService = ServiceRegistry.getService(ProductsService);
    this.categoryService = ServiceRegistry.getService(CategoryService);

    this.categoryService.getCategories().then((data) => {
      this.props = {
        ...this.props,
        categories: data
          .filter((d) => d.enabled)
          .sort((a, b) => a.order - b.order),
      };
      this.rerender(this.containerRef.parentElement, this);
    });
    if (this.props?.categoryId) {
      this.renderProductsByCategoryId();
    } else {
      this.renderAllProducts();
    }

    this.viewTemplates = [this.gridView];
  }

  renderAllProducts() {
    this.productService.getAll().then((data) => {
      this.gridView = new GridViewComponent(this.handleBars, data);
      this.viewTemplates = [this.gridView];
      this.rerender(this.productContainerRef, this.gridView);
    });
  }

  renderProductsByCategoryId() {
  this.productService.getProducts(this.props.categoryId).then((data) => {
      this.gridView = new GridViewComponent(this.handleBars, data);
      this.viewTemplates = [this.gridView];
      this.rerender(this.productContainerRef, this.gridView);
    });
  }

  render() {
    return productsTemplate({
      categories: this.props?.categories,
      gridView: this.gridView.render(),
    });
  }

  postRender() {
    this.productContainerRef = document.querySelector(
      "[hbs-id='products-container']"
    );
    this.containerRef = document.querySelector(
      "[hbs-id='products-main-container']"
    );
    const refs = [];
    this.props?.categories?.forEach((cat) => {
      refs.push(document.getElementById(cat.id));
    });

    document.querySelector('#menu-dd').onclick = (e) => {
      e.currentTarget.classList.toggle('show');
    };
    
    refs.forEach((e, _i) => {
      if (_i === 0) e.classList.add('active');
      e.onclick = () => {
        this.props = {
          ...this.props,
          categoryId: e.id,
        };
        this.renderProductsByCategoryId();
        document.querySelector('#menu-dd').classList.remove('show');
        e.classList.add('active');
        refs.filter((_, i) => i !== _i).forEach((r) => r.classList.remove('active'));
      };
    });
    super.postRender();
  }
}
