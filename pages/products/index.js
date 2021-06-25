import Products from "../../components/Products";
import ProductsContainerStyles from "../../components/styles/ProductsContainerStyles";
import SideNavBar from "../../components/SideNavBar";

export default function CategoryPage() {
  return (
    <>
      <SideNavBar />
      <ProductsContainerStyles>
        <Products />
      </ProductsContainerStyles>
    </>
  );
}
