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
        Promise.all([this.categoryService.getCategories(), this.categoryService.getBanners()]).then((resp) => {
            this.props = {
                categories: resp[0].filter(d => d.enabled).sort((a, b) => a.order - b.order),
                banners: resp[1].filter(d => d.isActive).sort((a, b) => a.order - b.order),
            };
            this.rerender(this.containerRef.parentElement, this);
        });
    }

    initializeCarousel() {
        const banners = [...this.bannerCarousel.querySelectorAll('.banner-container')];
        const navigators = [...this.bannerCarousel.querySelectorAll('.carousel-navigator_anchor')];
        if (banners.length === 0 || navigators.length === 0) {
            return;
        }
        
        let inViewIndex = 0;
        const changeBanner = () => {
            banners[inViewIndex].classList.add('active');
            navigators[inViewIndex].classList.add('active');
            banners.filter((_v, i) => i !== inViewIndex).forEach((e) => e.classList.remove('active'));
            navigators.filter((_v, i) => i !== inViewIndex).forEach((e) => e.classList.remove('active'));
            inViewIndex = inViewIndex === banners.length - 1 ? 0 : inViewIndex + 1;
        };

        banners[inViewIndex].classList.add('active');
        navigators[inViewIndex].classList.add('active');
        navigators.forEach((e, _i) => {
            e.onclick = () => {
                inViewIndex = _i;
                changeBanner();
            }
        })
        this.bannerInterval = setInterval(() => {
            changeBanner();
        }, 5000);

    }

    render() {
        return categoryTemplate({
            categories: this.props?.categories,
            banners: this.props?.banners,
        });
    }

    postRender() {
        this.containerRef = document.querySelector("[hbs-id='categories-container']");
        this.bannerCarousel = document.querySelector("[hbs-id='categories-banner-carousel']");
        if (this.bannerCarousel) {
            this.initializeCarousel();
        }
        this.props?.categories?.forEach(cat => {
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

    onDispose() {
        super.onDispose();
        this.bannerInterval && clearInterval(this.bannerInterval);
    }
}