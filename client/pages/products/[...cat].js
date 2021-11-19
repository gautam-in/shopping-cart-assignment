import { useRouter } from "next/router";
import { useSelector, useEffect} from "react-redux";

import SidebarComponent from '../../components/sidebar/SidebarComponent'
import ProductList from '../../components/Product/ProductList/ProductList'

import { Wrapper } from '../../components/styles/Product';

export default function productCategoty ({query}) {
    const cid = query.cat[1];
    const products = useSelector(state => state.product.allProducts);
    const categoryProducts = products.filter(product => product.category === cid)
    return (
        <Wrapper>
            <SidebarComponent />
            <main className="contentPart">
                <ProductList products={categoryProducts}/>
                {/* <div class="mobile-nav-list">
                    <div class="category-list-nav-mobile">
                        <h3>Fruits and Vegetables</h3>
                        <div class="arrow"></div>
                    </div>
                </div> */}
            </main>
        </Wrapper>
    )   
}