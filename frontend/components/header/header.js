const CustomHeader= (onClick) => `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
                crossorigin="anonymous" referrerpolicy="no-referrer" async/>
    <style>
            .header .logo{
                height: 80px;
                padding: 10px 0;
            }
            nav a,span {
                text-decoration: none;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: black;
            }
            span:hover{
                cursor:pointer
            }
            .header{
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
            }
            .header-content{
                max-width: 90%;
                margin: auto;
                display: flex;
                justify-content: space-between;
            }
            .header-logo-container{
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
            }
            .header-main-nav{
                padding: 10px 30px;
            }
            .cart-count{
                background-color: lightgrey;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .header-cart-count-container{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .cart-icon{
                font-size: 30px;
                color: #ab3862;
                margin-right: 10px;
            }
    </style>


    <div class="header">
        <div class="header-content">
            <div class="header-logo-container">
                <img class="logo" src="../../../static/images/logo_2x.png" alt="logo">
                <nav class="header-main-nav">
                    <a href="javascript:void(0);" style="margin-right: 20px">Home</a>
                    <span onclick="${onClick}">Products</a>
                </nav>
            </div>
            <div class="header-cart-count-container">
                <nav style="padding: 10px;">
                    <a href="javascript:void(0);" style="margin-right: 20px;">SignIn</a>
                    <a href="javascript:void(0);">Register</a>
                </nav>
                <div class="cart-count">
                    <i class="fas fa-shopping-cart cart-icon"></i>
                    0 Items
                </div>
            </div>
        </div>
    </div>
`

class MyHeader extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    updateStyle(elem) {
        const shadow = elem.shadowRoot;
        shadow.innerHTML = CustomHeader(elem.getAttribute('on-click'));
        // shadow.innerHTML = CustomHeader()
    }

    connectedCallback() {
        this.updateStyle(this)
    }
}

customElements.define("my-header", MyHeader);