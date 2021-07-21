import { BaseComponent } from "../base/base.component";
import { routes, RouteSubject } from "../constants";
import categoryTemplate from "./category.hbs";
import { ServiceRegistry } from "./../../services/index.services";
import { CategoryService } from "./../../services/category.service";
import "./styles.scss";

export class CategoryPartial extends BaseComponent {
    constructor(args, props) {
        super(args, props);
    }

    preRender() {
        this.categoryService = ServiceRegistry.getService(CategoryService)
        this.categoryService.getCategories().then((data) => {
            this.props = data.filter(d => d.enabled).sort((a, b) => a.order - b.order);
            this.rerender(this.containerRef.parentElement, this);
        });
    }

    render() {
        return categoryTemplate({
            data: this.props
        });
    }

    postRender() {
        this.containerRef = document.querySelector("[hbs-id='categories-container']");
        this.props?.forEach(cat => {
            document.getElementById(cat.key).onclick = () => {
                RouteSubject.next({
                    route: routes.products,
                    params: {
                        categoryId: cat.id
                    }
                })
            };
        })
    }
}