import _ from 'lodash';
import './index.scss'
import header from '../components/header';
import footer from '../components/footer';
import slider from '../components/slider';

function body(){
    return `<main id="main">
                ${slider()}
                <article class="homebanners">
                    <div class="homebanners__imagecontainer">
                        <img class="homebanners__imagecontainer__image" src="./static/images/category/fruits.png" alt="Basket of fruits and vegetables" />
                    </div>
                    <header class="homebanners__textcontainer">
                        <h2 class="homebanners__textcontainer__heading">Fruits & Vegetables</h2>
                        <p class="homebanners__textcontainer__subheading">A variety of fresh fruits and vegetables.</p>
                        <a class="homebanners__textcontainer__button" href="#" title="Explore Fruit and Vegetable">Explore-fruit-and-veg</a>
                    </header>
                </article>
                <article class="homebanners">
                    <header class="homebanners__textcontainer">
                        <h2 class="homebanners__textcontainer__heading">Bakery Cakes and Dairy</h2>
                        <p class="homebanners__textcontainer__subheading">The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.</p>
                        <a class="homebanners__textcontainer__button" href="#" title="Explore Bakery Cakes Dairy">Explore bakery-cakes-dairy</a>
                    </header>
                    <div class="homebanners__imagecontainer">
                        <img class="homebanners__imagecontainer__image" src="./static/images/category/bakery.png" alt="Slices of Bread" />
                    </div>
                </article>
                <article class="homebanners">
                    <div class="homebanners__imagecontainer">
                        <img class="homebanners__imagecontainer__image" src="./static/images/category/beverages.png" alt="Tea, Coffee and Juices" />
                    </div>
                    <header class="homebanners__textcontainer">
                        <h2 class="homebanners__textcontainer__heading">Beverages</h2>
                        <p class="homebanners__textcontainer__subheading">Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.</p>
                        <a class="homebanners__textcontainer__button" href="#" title="Explore Beverages">Explore beverages</a>
                    </header>
                </article>
                <article class="homebanners">
                    <header class="homebanners__textcontainer">
                        <h2 class="homebanners__textcontainer__heading">Beauty and Hygiene</h2>
                        <p class="homebanners__textcontainer__subheading">Buy beauty and personal care products online in India at best prices.</p>
                        <a class="homebanners__textcontainer__button" href="#" title="Explore Beauty Hygiene">Explore beauty-hygiene</a>
                    </header>
                    <div class="homebanners__imagecontainer">
                        <img class="homebanners__imagecontainer__image" src="./static/images/category/beauty.png" alt="Beauty and Hygiene products" />
                    </div>
                </article>
                <article class="homebanners">
                    <div class="homebanners__imagecontainer">
                        <img class="homebanners__imagecontainer__image" src="./static/images/category/baby.png" alt="baby taking shower" />
                    </div>
                    <header class="homebanners__textcontainer">
                        <h2 class="homebanners__textcontainer__heading">Baby Care</h2>
                        <p class="homebanners__textcontainer__subheading">Shop online for Baby Products. Diapers. Skin Care Products.etc.</p>
                        <a class="homebanners__textcontainer__button" href="#" title="Explore Baby Products">Explore baby</a>
                    </header>
                </article>
            </main>`
}

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = header() + body() + footer();
  
    return element;
  }
  
  document.body.appendChild(component());