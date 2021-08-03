import './styles/header.scss';
import headerTemplate from './hbs/header.hbs';
import { handlebarPartials, routes, RouteSubject } from '../../constants';
import { BaseComponent } from '../../base/base.component';
import { NavigationPartial } from '../../navigation/navigation.partial';
import { CartPartial } from '../../cart/cart.partial';

export class HeaderPartial extends BaseComponent {
    constructor(args, props) {
        super(args, props);
        // this.preRender();
    }

    routeTo(route) {
        RouteSubject.next({
            route
        });
    }

    preRender() {
        this.userActions = this.props.userActions;
        this.navigationTemplate = new NavigationPartial(this.handleBars, {
            menu: [{
                text: 'Home',
                route: '/home',
                id: 'home-nav-link',
            }, {
                text: 'Products',
                route: '/products',
                id: 'products-nav-link',
            }]
        });
        this.cartTemplate = new CartPartial(this.handleBars);
        this.viewTemplates.push(this.navigationTemplate, this.cartTemplate);
    }

    render() {
        return headerTemplate({
            nav: this.navigationTemplate.render(),
            cart: this.cartTemplate.render(),
            userActions: this.userActions
        });
    }

    postRender() {
        super.postRender();
        this.userActions.forEach(ua => {
            document.getElementById(ua.id).onclick = () => {
                this.routeTo(ua.route);
            }
        });
    }
}