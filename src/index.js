import { Header } from './header/header.js';

document.addEventListener('click', (e) => {
    const header = new Header();
    header.toggleMenu(undefined, true);
});

window.addEventListener('resize', () => {
    let sideNav = document.getElementsByClassName('main-side-nav')[0];
    const windowWidth = window.innerWidth;
    if (windowWidth > 560) {
        sideNav?.classList?.remove('show');
    }    
})