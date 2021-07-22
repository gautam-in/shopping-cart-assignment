import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
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