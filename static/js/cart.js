let Cart = null;
const CartModule = (function () {
    let instance = null;
    function Cart() {
        this.Items = [];
    }
    Cart.prototype = {
        Show: function () {
            let t_h = window.innerHeight;
            let h = document.body.querySelector('header');
            document.querySelector('.cart-area').style.height = (t_h - h.clientHeight).toFixed(0) + "px";

            document.querySelector('.cart-shadow').classList.remove('hidden');

            let c_p = document.querySelector('.cart-parent');
            c_p.classList.remove('hidden');
            document.body.style.overflowY = "hidden";
        },
        Hide: function () {
            document.querySelector('.cart-shadow').classList.add('hidden');
            document.querySelector('.cart-parent').classList.add('hidden');
            document.body.style.overflowY = "auto";
        },
        _updateCartLinkCount:function(){
        /**Update Count on Cart Button */
        let span = document.querySelector('span.count-cart-items');
        span.innerHTML = this.Items.length + " Items";
        },
        _updateCartHeaderCount:function(){
            let span = document.querySelector('.cart-header .count');
            span.innerHTML = `(${this.Items.length} Items)`;
        },
        AddItem: function (product) {
            let cartItem = new CartItem(product);
            this.Items.push(cartItem);
            this._updateCartLinkCount();
            this._updateCartHeaderCount();
            this._checkCartEmpty();
            this._addToUI(cartItem);
        },
        _checkCartEmpty:function(){
            if(this.Items.length){
                document.querySelector('.cart-area .cart-items').removeAttribute('items');
                
            }else{
                document.querySelector('.cart-area .cart-items').setAttribute('items','empty');
            }
        },
        _addToUI: function (cartItem) {
            let item = cartItem.Item;
            let template = document.querySelector('.cart-items div.cart-item[template]')
            let item_container = template.parentElement;
            let view_item = template.cloneNode(true);
            view_item.removeAttribute('template');

            cartItem.ViewItem = view_item;
            view_item.querySelector('.left img').src = item.imageURL;
            view_item.querySelector('.right .name span').append(item.name);

            view_item.querySelector('.right .item-action .action span.cart-item-price').append(item.price);

            view_item.querySelector('.right .item-action .price span.cart-item-amount').append(item.price);


            view_item.querySelector('.increase-qty').addEventListener('click', () => {
                cartItem.HandleIncreaseQty('span.qty', 'span.amount');
                this._updateAmount();
            });

            view_item.querySelector('.decrease-qty').addEventListener('click', () => {
                cartItem.HandleDecreaseQty('span.qty', 'span.amount');
                if (cartItem.Quantity <= 0) {
                    for (let i = 0; i < this.Items.length; i++) {
                        const element = this.Items[i];
                        if (element == cartItem) {
                            this.Items.splice(i, 1);
                            item_container.removeChild(view_item);
                            this._checkCartEmpty();
                            break;
                        }
                    }
                }
                this._updateCartLinkCount();
                this._updateCartHeaderCount();
                this._updateAmount();
            });

            item_container.append(view_item);
            this._updateAmount();
        },
        getAmount: function () {
            //can also do discount calculations here
            let amnt =  this.Items.reduce((a, b) => {
                debugger;
                return a+ b.getAmount();
            },0)
            return amnt;
        },
        _updateAmount:function(){
            document.querySelector('.cart-area .checkout .action .button .amount').innerHTML = +this.getAmount();
        }
    }

    function CartItem(item) {
        this.Price = item.price || 0;
        this.Quantity = 1;
        this.Item = item || {};
        this.ViewItem = null;
    }
    CartItem.prototype.getAmount = function () { return +(this.Price * this.Quantity).toFixed(2); }
    CartItem.prototype.HandleIncreaseQty = function (selctorQty, selectorAmount) {
        this.Quantity++;
        let amnt = this.getAmount();
        this.ViewItem.querySelector(selctorQty).innerHTML = this.Quantity;
        this.ViewItem.querySelector(selectorAmount).innerHTML = +amnt;
    }
    CartItem.prototype.HandleDecreaseQty = function (selctorQty, selectorAmount) {
        if (this.Quantity <= 0) return;
        this.Quantity--;
        let amnt = this.getAmount();
        this.ViewItem.querySelector(selctorQty).innerHTML = this.Quantity;
        this.ViewItem.querySelector(selectorAmount).innerHTML = +amnt;
    }

    return { getInstance: () => { return instance != null ? instance : instance = new Cart() } }
})();
Cart = CartModule.getInstance();


function ShowCartClick() {
    Cart.Show();
}
function CloseCartClick() {
    Cart.Hide();
}
function AddToCart(item) {
    Cart.AddItem(item);
}