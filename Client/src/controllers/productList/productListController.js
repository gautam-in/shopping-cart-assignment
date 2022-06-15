import HttpGateway from '../../services/httpGateway';
import './productList.scss'
import '../productCard/productCard.scss';
import EventEmitter from '../../modules/EventEmitter';
export const productEvent = new EventEmitter();

function ProductListController() {
    this.listOfProduct = [];
    this.categories = [];
    this.SelectedProductList = []
    this.selectedCategoryID = "";
    this.addTocart();

    processIntialApiCalls()
        .then(res => {
            //  console.log(res)
            this.listOfProduct = [...res.productListData];
            this.categories = [...res.productrCategory];
           // this.selectedCategoryID = this.categories[0].id;
            this.getSelectedCategoryData()
        })
        .catch(err => {
            console.log(err)
        })

}
ProductListController.prototype.getSelectedCategoryData = getSelectedCategoryData;
ProductListController.prototype.addTocart = addTocart;

function getSelectedCategoryData() {

    let _this = this;
    processSelectedCatogoryData();
    document.addEventListener('click', function (e) {

        //  console.log(e.target.className);
        if (e.target.className == 'category-list') {
            _this.selectedCategoryID = e.target.dataset.catobject;
            processSelectedCatogoryData()
        }
    })
    function filteredProductData(categoryID, listOfProduct) {
        return listOfProduct.filter(list => list.category == categoryID)
    }
    function filterSelectedCategory(categoryID, category) {
        return category.find(list => list.id == categoryID)

    }

    function processSelectedCatogoryData() {
        //  console.log(_this.selectedCategoryID);
        let currentCategory = {}
        if (_this.selectedCategoryID) {
            _this.SelectedProductList = filteredProductData(_this.selectedCategoryID, _this.listOfProduct)
            console.log(_this.SelectedProductList);
            currentCategory = filterSelectedCategory(_this.selectedCategoryID, _this.categories);
            console.log(currentCategory)
        } else {
             _this.SelectedProductList=_this.listOfProduct;
            console.error("category Not selected")
        }

        productEvent.emit('selectCategory', currentCategory?.key);

    }
}

function addTocart() {

    document.addEventListener('click', (e) => {

        let targetClass = e.target.className;
        if (targetClass == 'card-action') {
            //    console.log(e.target.dataset.product)
            let productId = e.target.dataset.product;
            //    console.log(this.SelectedProductList)
            let productData = this.SelectedProductList.find(list => list.id == productId);
            if (productData) {
                //    console.log(productData)
                productEvent.emit('addToCart', productData)
            } else {
                console.error("product is null")
            }
        }
    })
}



async function processIntialApiCalls() {
    let httpGateway = new HttpGateway();

    try {
        let productListData = await httpGateway.getProductList();
        let productrCategory = await httpGateway.getCategories();
        return { productListData, productrCategory }
    } catch (err) {
        console.log(err)
        return false;
    }

}




export { ProductListController };
