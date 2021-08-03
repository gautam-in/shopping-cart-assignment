import { useQuery, gql } from "@apollo/client";
import { useRouter } from 'next/router'
import {Loading} from "../../components/Loading";
import {ProductPageSidebar} from "../../components/ProductPageSidebar";
import {ProductCards} from "../../components/ProductCards";

export const GET_PRODUCTS = gql`
    query GetProducts($category: String!) {
        products(category: $category) {
            _id
            description
            temp_url
            sku
            name
            price
            stock
            category
            product_uid
        }
    }
`

const GET_CATEGORIES = gql `
    query GetCategories {
        categories {
            _id
            name
            category_uid
        }
    }
`

const Products = (props) => {
    const router = useRouter();
    const { category_uid } = router.query;
    const productsObj = useQuery(GET_PRODUCTS, {
        variables: {category: category_uid}
    })
    const categoryObj = useQuery(GET_CATEGORIES);

    if(productsObj.loading || categoryObj.loading) {
        return <Loading/>
    } else if(productsObj.error || categoryObj.error) {
        return <div>{productsObj.error || categoryObj.error}</div>
    } else {
        return (
            <div style={{display: "flex"}}>
                <ProductPageSidebar categoryData={categoryObj.data.categories}/>
                <ProductCards productData={productsObj.data.products}/>
            </div>)
    }
}

export default Products