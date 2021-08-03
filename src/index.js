import './components/index.component';
import { entryPoint } from './components/index.component';
import * as Handlebars from 'handlebars';
import "./main.scss";
import { routes, RouteSubject } from './components/constants';
import { ServiceRegistry, dependencies } from './services/index.services';

class Bootstrap {
    partials = [];
    services = [];

    constructor() {
        this.init();
        this.registerServices();
        this.registerPartials();
        this.preRender();
        this.render();
        this.postRender();
        this.registerRouting();
    }

    init() {
        // this.partials = partialViews.map(partial => new partial(Handlebars));
    }

    registerServices() {
        this.services = dependencies.map(s => {
            const instance = new s();
            ServiceRegistry.registerService(s, instance);
            return instance;
        });
    }

    registerPartials() {
        
    }

    preRender() {
        this.entryPoint = new entryPoint(Handlebars);
    }

    render() {
        const bootstrap = document.body.getElementsByTagName("bootstrap")[0];
        bootstrap.innerHTML = this.entryPoint.render();
    }

    postRender() {
        this.entryPoint.postRender();
    }

    registerRouting() {
        RouteSubject.next({
            route : routes.home
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new Bootstrap();
});