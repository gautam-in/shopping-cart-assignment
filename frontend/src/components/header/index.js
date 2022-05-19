import './index.scss'
import cart from '../cart'
import logo from '../../assets/images/logo.png';

const storedItems = JSON.parse(localStorage.getItem('cartItems'));
function createCartButton(){
    const header__navbar__mainnav__list__item__link = document.createElement('a')
    header__navbar__mainnav__list__item__link.classList.add('header__navbar__mainnav__list__item__link')
    header__navbar__mainnav__list__item__link.href = "#"
    header__navbar__mainnav__list__item__link.title = "Open Cart"
    header__navbar__mainnav__list__item__link.onclick = (event) => {
        event.preventDefault();
        cart()
    }
    header__navbar__mainnav__list__item__link.innerHTML = `<svg width="25" height="25">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
    <span id="cartquatity">
        ${storedItems != null ? storedItems.length : 0}
    </span>
    Items`
    document.getElementById('cartbutton').appendChild(header__navbar__mainnav__list__item__link)

}
export default function header(){
    setTimeout(() => createCartButton(), 100)
    return `<Header class="header">
                <a class="header__skip" href="#main" title="Skip to main content">
                    Skip to main content
                </a>
                <nav class="header__navbar">
                    <div class="header__navbar__topbar">
                        <ul class="header__navbar__topbar__list">
                            <li class="header__navbar__topbar__list__item">
                                <a class="header__navbar__topbar__list__item__link" href="./login.html" title="Signin">Signin</a>
                            </li>
                            <li class="header__navbar__topbar__list__item">
                                <a class="header__navbar__topbar__list__item__link" href="./register.html" title="Register">Register</a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__navbar__mainnav">
                        <ul class="header__navbar__mainnav__list">
                            <li class="header__navbar__mainnav__list__item header__navbar__mainnav__list__brand">
                                <a class="header__navbar__mainnav__list__item__link" href="./index.html" title="Home">
                                    <img class="header__navbar__mainnav__list__item__link__logo" src="${logo}" alt="Sabka Bazzar Logo" />
                                </a>
                            </li>
                            <li class="header__navbar__mainnav__list__item">
                                <a class="header__navbar__mainnav__list__item__link"href="./index.html" title="Home">home</a>
                            </li>
                            <li class="header__navbar__mainnav__list__item">
                                <a class="header__navbar__mainnav__list__item__link" href="./products.html" title="Products">Products</a>
                            </li>
                            <li class="header__navbar__mainnav__list__item header__navbar__mainnav__list__cart" id="cartbutton">
                            </li>
                        </ul>
                    </div>
                </nav>
            </Header>`
}