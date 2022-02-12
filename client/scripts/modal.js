export class Modal extends HTMLElement{
    constructor(){
        super();
        this._total = 0;
    }

    connectedCallback(){
        this.innerHTML = `
        <div id="backdrop"></div>
        <div id="modal">
        <header id="modal-header">
            <p id="modal-header-content"><strong>My Cart (
            ${window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')).length : 0}
            Items)</strong></p>
            <div id="modal-close">&#10006;</div>
        </header>
        <main id="modal-main">
        <div id="modal-main-content"></div>
        <script type="text/x-handlebars-template" id="modal-template">
        {{#each items}}
            <section id="cart-item">
            <img src={{this.imageURL}} alt={{this.name}}/>
            <section id="cart-item-main">
            <div><strong>{{this.name}}</strong></div>
            <section id="cart-item-main-footer">
            <button id="decrement" type"button" class="round-btn">-</button>
            <div id="counter">1</div>
            <button id="increment" type="button" class="round-btn">+</button>
            <div style="font-size : 1rem;">&#215</div>
            <div>Rs <span id="item-price">{{this.price}}</span></div>
            <section id="item-total"></section>
            </section>
            </section>
            </section>
        {{/each}}
        </script>
        <section id="main-content-footer">
        <img src="../../static/images/lowest-price.png" alt="image for lowest price quaranteed"></img>
        <p>You won't find it cheaper anywhere</p>
        </section>
        </main>
        <footer id="modal-footer">
        <section id="promo">Promo can be applied on payment page</section>
        <setion id="checkout">
        <button type="button">Proceed To CheckOut</button>
        </section>
        </footer>
        </div>
        `
        document.getElementById('modal-close').addEventListener('click', () => {
            let modal = document.querySelector('body custom-modal');
            modal.remove();
        })

        let template = Handlebars.compile(document.querySelector('#modal-template').innerHTML);
        let data = template({
            items : JSON.parse(window.localStorage.getItem('cart'))
        });

        document.getElementById('modal-main-content').innerHTML += data;

        document.querySelectorAll('#decrement').forEach(node => {
            let parentEle = node.parentElement;
            node.addEventListener('click', () => {
                parentEle.querySelector('#counter').innerText -= 1;
                parentEle.querySelector('#item-total').innerText = parseInt(parentEle.querySelector('#item-price').innerText)*parseInt(parentEle.querySelector('#counter').innerText);
            })
        })

        document.querySelectorAll('#increment').forEach(node => {
            let parentEle = node.parentElement;
            node.addEventListener('click', () => {
                parentEle.querySelector('#counter').innerText = parseInt(parentEle.querySelector('#counter').innerText) + 1;
                parentEle.querySelector('#item-total').innerText = parseInt(parentEle.querySelector('#item-price').innerText)*parseInt(parentEle.querySelector('#counter').innerText);
            })
        })
    };
}