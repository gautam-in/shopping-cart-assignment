import { useRouter } from "next/router";
import Products from "../../components/organism/Products";
import { useEffect, useState } from "react";
import SideNav from "../../components/atom/SideNav";
import ProductsContainerStyles from "../../components/styles/ProductsContainerStyles";
import MobileCategoryNav from "../../components/atom/MobileCategoryNav";
import { GET } from "../../Utils/helper";
import { ProductsPath, CategoriesPath } from "../../constant/index";

export const getStaticProps = async () => {
  const categories = await GET(CategoriesPath);
  const products = await GET(ProductsPath);
  return {
    props: { categories, products },
  };
};

function CategoryPage({ products, categories }) {
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

  return (
    <div>
      <SideNav categories={categories} />
      <MobileCategoryNav categories={categories} />
      <ProductsContainerStyles>
        <Products products={selectedProduct} />
      </ProductsContainerStyles>
    </div>
  );
}

export default CategoryPage;
