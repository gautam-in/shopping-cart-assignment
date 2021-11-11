import axios from "axios";
import ProductCard from "../../components/products/ProductCard";
import ProductSidebar from "../../components/products/ProductSidebar";
import Head from 'next/head'
import {
  ProductMain,
  ProductWrapper,
} from "../../components/products/productStyles";
import { useQuery } from "react-query";

const baseUrl = "http://localhost:3000/api/products";

export async function getStaticPaths() {
  const products = await axios.get(baseUrl).then((res) => res.data);
  const paths = products.map((product) => {
    return {
      params: {
        category: product.category,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await axios.get(baseUrl).then((res) => res.data);
  return {
    props: {
      params,
      products,
    },
  };
}

function Products({ params, products }) {
  const { category } = params;
  const currentProducts = products.filter(
    (product) => product.category === category
  );
  return (
    <>
    <Head>
      <title>{category}</title>
    </Head>
    <ProductMain>
      <ProductSidebar />
      <ProductWrapper>
        {currentProducts.map((product) => {
          return (
            <ProductCard
              key={product.sku}
              name={product.name}
              description={product.description}
              imageURL={product.imageURL}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </ProductWrapper>
    </ProductMain>
    </>
  );
}

export default Products;
