class Cart{

    _itemDetail = [];

    constructor(itemDetail, count){
        this._itemDetail = itemDetail;
        this._count = count;
    }

    render = () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', 
        `
        <section id="cart__container">
            <header id="cart__container__header">
                <h3 id="cart__items__count"></h3>
                <button id="close__cart">X</button>
            </header>
            <main id="cart__container__main">

            </main>
            
            <footer id="cart__container__footer">
                <span>Promo code can be applied on payment page</span>
                <button>
                    <span>Proceed to Checkout</span>
                    <span id="t__price">Rs. 0 &gt;</span>
                </button>
            </footer>
        </section>
        `)

        document.getElementById('close__cart').addEventListener('click', this.removeCart);
        document.getElementById('cart__container__main').innerHTML += `
        <div id="lowest-price">
            <img width="150" height="auto" src="../../../static/images/lowest-price.png" alt="Lowest Price Guranteed"/> 
            <p>You won\'t find it cheaper anywhere</p>
        </div>
        `

    }

    removeCart = () => {
        document.getElementById('cart__container').style.visibility = 'hidden';
        document.getElementById('lowest-price').style.visibility = 'hidden';
    }

    showCart = () => {
        if(this._itemDetail.length === 0){
            document.getElementById('cart__items__count').innerText = `My Cart (${this._itemDetail.length} item)`;
            document.getElementById('lowest-price').style.visibility = 'hidden';
        }else{
            document.getElementById('lowest-price').style.visibility = 'visible';
        }
        document.getElementById('cart__container').style.visibility = 'visible';

    }

    addCartItem = (item) => {

            if(this._itemDetail.filter(e => e.id === item[0].id).length > 0){

                this.updateCartItemCount(item[0], 1)
                this.showCart();

            }else{

                item[0].count = 1;
                this._itemDetail = [...this._itemDetail, ...item]
                document.getElementById('cart__items__count').innerText = `My Cart (${this._itemDetail.length} item)`;
                document.getElementsByTagName('uc-header')[0].setAttribute('cart-item', this._itemDetail.length);
                new CartItem(this, item[0]).render()
                this.showCart();
                this.totalPrice()

            }
    }

    removeCartItem = () => {
            this._itemDetail = [...this._itemDetail, ...item]
    }

    totalPrice = () => {
        let total = 0;
        if(this._itemDetail.length > 0){
            for(let i=0;i<this._itemDetail.length;i++){
                total+=this._itemDetail[i].price * this._itemDetail[i].count;
            }
        }

        document.getElementById('t__price').innerText = `Rs. ${total} >`;
    }

    updateCartItemCount = (item, action) => {
        if(!((item.count === 0 && action === -1) || (item.count === item.stock && action === 1))){
            item.count += action;
            document.getElementById('count__'+item.id).textContent = item.count;
            document.getElementById('pc__productprice__'+item.id).textContent = 'Rs. '+ item.count * item.price;
            this.totalPrice();
        }
    }
}

class CartItem{
    constructor(cart, product) {
        this._product = product;
        this._cart = cart;
    }

    render(){
        document.getElementById('cart__container__main').insertAdjacentHTML('afterbegin', 
        `
        <div class="pc__container" key="${this._product.id}">
            <div>
                <img width="120" height="120" src="../../../${this._product.imageURL}" alt="${this._product.name}" Image />
            </div>
            <div class="pc__desc">
                <h3>${this._product.name}</h3>
                <div>
                    <button id="decreaseCount__${this._product.id}">-</button>
                    <span id="count__${this._product.id}">${this._product.count}</span>
                    <button id="increaseCount__${this._product.id}">+</button>
                    X
                    <span>Rs. ${this._product.price}</span>
                </div>
            </div>
            <div class="pc__productprice" id="pc__productprice__${this._product.id}">Rs. ${this._product.price * this._product.count}</div>
        </div>
        `)


        document.getElementById('decreaseCount__'+this._product.id).addEventListener('click', () => {
            this._cart.updateCartItemCount(this._product, -1)
        })

        document.getElementById('increaseCount__'+this._product.id).addEventListener('click', () => {
            this._cart.updateCartItemCount(this._product, +1)
        })
    }
}
