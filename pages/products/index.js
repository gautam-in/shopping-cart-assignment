import { useRouter } from "next/router";
import Products from "../../components/Products";

export default function ProductsPage(){
    const {query} =useRouter();
    const category = (query.category);
    return (
        <div>
            <Products category={category}/>
        </div>
    )
}