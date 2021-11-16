import { Header } from './header/header.js';
import { Products } from './products/products.js';

document.addEventListener('click', (e) => {
    const header = new Header();
    header.toggleMenu(undefined, true);

    const products = new Products();
    products.toggleSideNav(undefined, true);
});

window.addEventListener('resize', () => {
    let sideNav = document.getElementsByClassName('main-side-nav')[0];
    const windowWidth = window.innerWidth;
    if (windowWidth > 560) {
        sideNav?.classList?.remove('show');
    }    
})