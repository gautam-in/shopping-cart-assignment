import containerTemplate from './hbs/container.hbs';
import { routes, RouteSubject } from '../../constants';
import './styles/styles.scss';
import { BaseComponent } from '../../base/base.component';
import { HeaderPartial } from '../header/header.partial';
import { LoginPartial } from '../../login/login.component';
import { RegisterPartial } from '../../register/register.component';
import { CategoryPartial } from '../../category/category.component';
import { ProductsComponent } from '../../products/products.component';

export class ContainerComponent extends BaseComponent {
    mainContainerRef = null;
    currentTemplate = new LoginPartial(this.handleBars);
    constructor(args) {
        super(args, {});
    }

    preRender() {
        this.viewTemplates = [];
        this.headerTemplate = new HeaderPartial(this.handleBars, {
            userActions: [{
                text: 'Sign In',
                route: routes.login,
                id: 'sign-up-link',
            },
            {
                text: 'Register',
                route: routes.register,
                id: 'register-link',
            }]
        });
        RouteSubject.subscribe(({route, params}) => {
            this.currentTemplate.onDispose();
            if (route === routes.login || route === '/' || route === '') {
                this.currentTemplate = new LoginPartial(this.handleBars);
            } else if (route === routes.register) {
                this.currentTemplate = new RegisterPartial(this.handleBars);
            } else if (route === routes.home) {
                this.currentTemplate = new CategoryPartial(this.handleBars);
            } else if (route === routes.products) {
                this.currentTemplate = new ProductsComponent(this.handleBars, params);
            }
            this.viewTemplates = [this.headerTemplate, this.currentTemplate];
            this.rerender(this.mainContainerRef, this.currentTemplate);
        });
        this.viewTemplates.push(this.headerTemplate);
    }

    render() {
        return containerTemplate({
            header: this.headerTemplate.render(),
            mainTemplate: this.currentTemplate.render()
        });
    }

    postRender() {
        super.postRender();
        this.mainContainerRef = document.querySelector("[hbs-id=main-container]");
        this.headerContainerRef = document.querySelector("[hbs-id=header-container]");
        this.footerContainerRef = document.querySelector("[hbs-id=footer-container]");
    }
}