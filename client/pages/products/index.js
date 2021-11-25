import SidebarComponent from '../../components/sidebar/SidebarComponent'
import ProductList from '../../components/Product/ProductList/ProductList'

import { Wrapper } from '../../components/styles/Product';
export default function ProductsPage() {
   return (
        <Wrapper>
            <SidebarComponent />
            <main className="contentPart">
                <ProductList/>
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

