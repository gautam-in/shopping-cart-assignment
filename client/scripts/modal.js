export class Modal extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div id="backdrop"></div>
        <div id="modal">
        <header id="modal-header">
            <p id="modal-header-content"><strong>My Cart (Items)</strong></p>
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
            <button type"button" class="round-btn decrement" onclick="decrement">-</button>
            <div id="counter">0</div>
            <button type="button" class="round-btn increment" onclick="increment">+</button>
            <div><div>
            <div></div>
            <div></div>
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
        <div>Promo can be applied on payment page</div>
        <button type="button">Proceed To CheckOut</button>
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

        function increment(){
            document.getElementById('counter').innerText += 1;
        }

        function decrement(){
            document.getElementById('counter').innerText -= 1;
        }
    };
}