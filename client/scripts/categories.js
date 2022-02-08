import { fetchData } from './utils.js';

export class Category extends HTMLElement{
    constructor(){
        super();
    }

    async connectedCallback(){
        this.innerHTML = `
        <main class="categories-container">
        <section class="category-element"></section>
        <script src="text/x-handlebars-template" id="cat-template">
        {{#each items}}
        {{#if (isEven @index)}}
        <img class="cat-img" src={{this.imageUrl}} alt={{this.name}}/>
        <aside class="side-content">
        <h4>{{this.name}}</h4>
        <p>{{this.description}}</p>
        <button class="cat-button" id={{this.id}}>Explore {{this.name}}</button>
        </aside>
        {{else}}
        <aside class="side-content">
        <h4>{{this.name}}</h4>
        <p>{{this.description}}</p>
        <button class="cat-button" id={{this.id}}>Explore {{this.name}}</button>
        </aside>
        <img class="cat-img" src={{this.imageUrl}} alt={{this.name}}/>
        {{/if}}
        {{/each}}
        </script>
        </main>
        `;

        const categories = await fetchData('http://localhost:5000/categories');

        let categoryEle = document.querySelector('.category-element');
        categoryEle.addEventListener('click', event => redirectToProduct(event));

        function redirectToProduct(event){
            if(event.target.classList[0] === 'cat-button'){
                window.localStorage.setItem('categoryId', event.target.id);
                window.location.href='../views/products.html';
            }
        }

        //handlebar helper for checking odd/even index
        Handlebars.registerHelper('isEven', function(index){
            return index%2 === 0;
        })
        
        let template = Handlebars.compile(document.querySelector('#cat-template').innerHTML);
        let data = template({
            items : categories
        })
        document.querySelector('.category-element').innerHTML += data;
    }
}