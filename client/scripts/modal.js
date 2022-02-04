class Modal extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `
        <style>
        #backdrop {
            position : fixed;
            top : 0;
            left : 0;
            width : 100%;
            height : 100%;
            background-color : rgba(0,0,0,0.75);
            z-index : 10;
        }
        #modal {
            position : fixed;
            z-index : 100;
            top : 50%;
            left : 50%;
            transform : translate(-50%, -50%);
            width : 30%;
            background-color : #EEEEEE;
            height : 40rem;
        }
        #modal-header {
            width : 100%;
            height : 10%;
            background-color : black;
            display : flex;
            justify-content : space-between;
        }
        #modal-header-content {
            color : white;
            margin : 0;
            padding : 20px 0 0 20px;
            font-size : 20px;

        }
        #modal-close {
            float : right;
            color : white;
            font-size : 24px;
            padding :20px 20px 0 0;
        }
        #modal-close:hover {
            cursor : pointer;
        }
        #cart-item {
            display : grid;
            grid-template-columns : 1fr 3fr 1fr;
            background-color : white;
            width : 100%;
            margin-top : 1rem;
            height : 10vh;
        }
        #cart-item img {
            display : block;
            height : 50px;
            width : 50px;
            margin-left : auto;
            margin-right : auto;
        }
        #cart-item-main {
            display : grid;
            grid-template-rows : 1fr 1fr;
            grid-row-gap : 5px;
        }
        #modal-footer {
            position : fixed;
            bottom : 0;
            width : 100%;
            height : 10vh;
            background-color : white;
        }
        #main-content-footer {
            background-color : white;
            margin : 1rem;
            height : 7vh;
            display : grid;
            grid-template-columns : 1fr 2fr;
        }
        #modal-main-content {
            overflow-y : scroll;
        }
        </style>
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
            <div></div>
            </section>
            </section>
        {{/each}}
        </script>
        <section id="main-content-footer"></section>
        </main>
        <footer id="modal-footer"></footer>
        </div>
        `
        document.getElementById('modal-close').addEventListener('click', () => {
            let modal = document.querySelector('body custom-modal');
            modal.remove();
        })
        let template = Handlebars.compile(document.querySelector('#modal-template').innerHTML);
        console.log(JSON.parse(localStorage.getItem('cart')));
        let data = template({
            items : JSON.parse(localStorage.getItem('cart'))
        });

        document.getElementById('modal-main-content').innerHTML += data;
    };
}
customElements.define('custom-modal', Modal);