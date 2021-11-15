export class Header {
    toggleMenu(event, isRemove) {
        let sideNav = document.getElementsByClassName('main-side-nav')[0];
        sideNav.classList.toggle('show');

        if (isRemove) {
            sideNav.classList.remove('show');
        }
        if (event) {
            event.stopPropagation();
        }
    }
}

const h = new Header();

let menuEle = document.getElementsByClassName('menu')[0];
menuEle?.addEventListener('click', h.toggleMenu)