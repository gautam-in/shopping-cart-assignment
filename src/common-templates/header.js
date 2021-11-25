export const headerTemplate = `
<div class="sb-container">
    <nav class="sb-navbar">
        <!-- Side nav menu icon -->
        <div class="menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="menu-btn" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
        </div>
        <!-- Side nav For Mobile devices -->
        <div class="main-side-nav">
            <ul class="side-nav">
                <li class="">
                    <a href="/src/index.html" class="side-nav-link">Home</a>
                </li>
                <li>
                    <a href="/src/products/products.html" class="side-nav-link">Products</a>
                </li>
                <li>
                    <a href="/src/login/login.html" class="side-nav-link">SignIn</a>
                </li>
                <li>
                    <a href="/src/sign-up/sign-up.html" class="side-nav-link">Register</a>
                </li>
            </ul>
        </div>
        <!-- Side nav For Mobile devices End -->
        <div class="logo">
            <img src="/static/images/logo_2x.png" alt="Sabka Bazar Logo">
        </div>
        <ul class="main-nav">
            <li class="main-nav-item">
                <a href="/src/index.html" class="main-nav-link">Home</a>
            </li>
            <li class="main-nav-item">
                <a href="/src/products/products.html" class="main-nav-link">Products</a>
            </li>
        </ul>
        <div class="secondary-nav-parent">
            <ul class="secondary-nav">
                <li class="secondary-nav-item">
                    <a href="/src/login/login.html" class="secondary-nav-link">SignIn</a>
                </li>
                <li class="secondary-nav-item">
                    <a href="/src/sign-up/sign-up.html" class="secondary-nav-link">Register</a>
                </li>
            </ul>
            <div class="cart">
                <svg xmlns="http://www.w3.org/2000/svg" class="cart-icon" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                    </path>
                </svg>
                <p class="cart-btn">
                    <span class="cart-item-count">0</span>
                    Items
                </p>
            </div>
        </div>
    </nav>
</div>
`;