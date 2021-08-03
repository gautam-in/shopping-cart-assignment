import { BehaviorSubject, Subject } from "rxjs";

export const handlebarPartials = {
    headerTemplate: 'headerTemplate',
    navigationTemplate: 'navigationTemplate',
    cartTemplate: 'cartTemplate',
    loginTemplate: 'loginTemplate',
    formControlTemplate: 'formControlTemplate',
    registerTemplate: 'registerTemplate',
    categoryTemplate: 'categoryTemplate'
};

export const routes = {
    login: '/login',
    register: '/register',
    home: '/home',
    products: '/products',
}

export const RouteSubject = new Subject();
export const Rerender = new Subject();