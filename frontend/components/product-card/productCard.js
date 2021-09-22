const getProductCard = (productName,pImage,pDescription, pPrice) => `
    <style>
        .main-container{
            max-width: 15vw;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;         
            display: flex;
            flex-direction: column;
            padding:20px;
           
        }
        @media screen and (max-width: 1024px) {
            .main-container{
                max-width: 30vw;
            }
        }
        @media screen and (max-width: 500px) {
            .main-container{
                max-width: 80vw;
            }
        }
        .product-image{
            max-width: 100%;
            max-height: 250px;
        }
        .product-name{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .price-container{
            display:flex;
            justify-content:space-between;
            width:100%;
            align-items:center;
        }
        .product-description{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            background-color: lightgray;
            padding: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
        .price{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
    <script src="../button/button.js"></script>
    <div class="main-container">
        <h2 class="product-name">${productName}</h2>
        <img class="product-image" src="../../../${pImage}" alt="Item category">
        <p class="product-description">${pDescription}</p>
        <div class="price-container">
        <span class="price">MRP Rs.${pPrice}</span>
        <my-button label-text="Buy Now" on-click="clickHandler()"></my-button>
        </div>
    </div>
`

class ProductCard extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    
    updateStyle(elem) {
        const shadow = elem.shadowRoot;
        shadow.innerHTML = getProductCard(elem.getAttribute('product-name'),elem.getAttribute('product-image'),elem.getAttribute('product-desc'),elem.getAttribute('product-price'));
    }

    connectedCallback() {
        this.updateStyle(this)    }
}

customElements.define('product-card', ProductCard);