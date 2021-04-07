import { useRouter } from "next/router";
import Products from "../../components/templates/product_listing_page/index"
export default function ProductsPage(){
    const {query} =useRouter();
    const category = (query.category);
    return (
        <div>
            <Products category={category}/>
        </div>
    )
}