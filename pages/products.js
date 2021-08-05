import CategoryDispaly from "../Component/Categories";
import ProductList from "../Component/ProductList";
import { GET } from "../Lib/helper";
import SideNav from "../Component/atom/SideNav";
import MobileCategoryNav from "../Component/atom/MobileCategoryNav";
import ProductsContainerStyles from "../Component/styles/ProductsContainerStyles";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const getStaticProps = async () => {
  const categories = await GET("categories");
  const products = await GET("products");
  return {
    props: { categories, products },
  };
};

const Products = ({ categories, products }) => {
  const router = useRouter();
  const category = router.query.category;
  const [selectedProduct, setSelectedProduct] = useState(products);

  useEffect(() => {
    if (category) {
      let FiltrProduct = products.filter(
        (product) => product.category == category
      );
      setSelectedProduct(FiltrProduct);
    } else {
      setSelectedProduct(products);
    }
  }, [category]);
  // console.log(categories, products)
  return (
    <div>
      <SideNav categories={categories} />
      <MobileCategoryNav categories={categories} />
      <ProductsContainerStyles>
        <ProductList products={selectedProduct} />
      </ProductsContainerStyles>
    </div>
  );
};

export default Products;
