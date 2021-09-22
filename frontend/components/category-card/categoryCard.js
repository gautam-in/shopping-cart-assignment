const customCategoryCard = (imageLeft, categoryImage, categoryName, categoryDetail, buttonLabel, clickHandler) => `
    <style>
        img{
            height: 15vw;
        }
        .main-container{
            display: flex;
            flex-direction: ${imageLeft === 'false' ? 'row-reverse' : 'row'};
            justify-content: space-between;
            align-items:center;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 6px -6px, rgba(0, 0, 0, 0.06) 0px 2px 4px -4px;
            padding: 20px;
        }
        .detail-container{
            text-align:center
        }
        .detail-container h1, p{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
    <script src="../button/button.js"></script>
    <div class="main-container">
        <img src="${categoryImage}" alt="Item category">
        <div class="detail-container">
            <h1>${categoryName}</h1>
            <p>${categoryDetail}</p>
            <my-button label-text="Explore ${buttonLabel}" on-click="clickHandler()"></my-button>
        </div>
    </div>
`

class CategoryCard extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    
    updateStyle(elem) {
        const shadow = elem.shadowRoot;
        shadow.innerHTML = customCategoryCard(elem.getAttribute('image-left'), elem.getAttribute('category-image'),
        elem.getAttribute('category-name'),elem.getAttribute('category-detail'),elem.getAttribute('button-label'),elem.getAttribute('on-click'));
    }

    connectedCallback() {
        this.updateStyle(this);    }
}

customElements.define('category-card', CategoryCard);