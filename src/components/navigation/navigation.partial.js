import { BaseComponent } from "../base/base.component";
import { routes, RouteSubject } from "../constants";
import navigationTemplate from './navigation.hbs';
import "./styles.scss";

export class NavigationPartial extends BaseComponent {
    constructor(args, props) {
        super(args, props);
        this.menu = props.menu;
    }

    routeTo(route) {
        RouteSubject.next({
            route: route
        });
    }

    render() {
        return navigationTemplate({
            menu: this.menu
        });
    }

    postRender() {
        this.menu.forEach(m => {
            document.getElementById(m.id).onclick = () => {
                this.routeTo(m.route);
            }
        });
    }
}