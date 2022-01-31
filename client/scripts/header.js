class Header extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <style>
        .header{
            display : flex;
            justify-content : space-between;
            position : sticky;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
            left : 0;
            top : 0;
            width : 100%;
            max-height : 5rem;
        }
        .header-logo{
            padding : 20px 20px;
            width : 6rem;
        }
        #items-cart{
            display : flex;
            background-color : #EEEEEE;
        }
        a{
            text-decoration : none;
            color : black;
            border-radius : 5px;
        }
        a:hover{
            border-radius : 10px;
            background-color : #EEEEEE;
        }
        .center-nav {
            margin-top : 40px;
            font-size : 10px;
        }
        @media only screen and (min-width: 600px) {
            .center-nav {
                font-size : 20px;
            }
        }
        </style>
        <header class='header'>
        <section>
        <img class='header-logo' src='../../static/images/logo.png' alt='sabka bazar logo'/>
        </section>
        <nav class="center-nav">
        <a href='./index.html' style='padding : 10px;'>Home</a>
        <a style='padding : 10px;' href='./products.html'>Products</a>
        </nav>
        <section>
        <div style='display : flex; justify-content : space-between; padding : 6px 5px'>
        <a href='./login.html'>Login</a>
        <a href='./register.html'>Register</a>
        </div>
        <section id='items-cart'>
        <div>
        <span style='display : inline-block; font-size : 30px; color : #BF2957; padding : 5px 10px'><i class="fas fa-shopping-cart"></i><span>
        </div>
        <p style='font-size : 1rem; padding-right : 10px'>0 Items</p>
        </section>
        </section>
        </header>
        `;
    }
}

customElements.define('custom-header', Header)