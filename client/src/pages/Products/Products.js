import {  useEffect, useContext, Fragment } from "react";
import { isEmpty } from "lodash";
import Styled from "styled-components";
import SEO from "../../seo/SEO";
import H1 from "../../components/Typography/H1";
import Sidebar from "../../containers/Sidebar/Sidebar";
import Products from "../../containers/Products/Products";
import CategoriesContext from "../../store/Categories/Context";
import ProductsContext from "../../store/Products/Context";
import CartContext from "../../store/Cart/Context";
import { filteredProductsData } from "../../utils";

const SectionContainer = Styled.section`
    display: flex;
    @media(max-width: 766px){
       flex-direction: column;
    }
`;

const LeftSection = Styled.div`
    width: 20%;
    background : #eee;
    @media(max-width: 766px){
       width: 100%;
       background: none;
    }
`;

const RightSection = Styled.div`
    width: 80%;
    @media(max-width: 766px){
       width: 100%;
    }
`;

const NoProductsContainer = Styled.div`

    margin-top: 30px;
    @media(max-width: 766px){
        margin-top: 60px;
    }
    ${RightSection} &{
       display: flex;
       justify-content: center;
       align-items: center;
    }
`;

function ProductsPage() {
  /* using context to get global store values */
  const categoriesContext = useContext(CategoriesContext);
  const productsContext = useContext(ProductsContext);
  const cartContext = useContext(CartContext);

  /* getting the store values */
  const { categories, getCategories, categoryId, setCategoryId } =
    categoriesContext;
  const { products, getProducts,filterProducts,setFilterProducts } = productsContext;
  const { addCartItem } = cartContext;

  /* dispatching actions to fetch categories and products data from API */
  useEffect(() => {
    if (isEmpty(categories)) {
      getCategories();
    }

    if (isEmpty(products)) {
      getProducts();
    }

    return () => {
      setCategoryId("");
    }
  }, []);

  /* categories functionalities */
  const handleCategoryClick = (category) => {
    if (category.id === categoryId) {
      setCategoryId("");
    } else {
      setCategoryId(category.id);
    }
  };

  /* products functionalities */
  useEffect(() => {
    let filteredProducts = filteredProductsData(
      products,
      categoryId
    );
    setFilterProducts(filteredProducts);
  }, [categoryId]);

  const handleProductClick = (product) => {
    addCartItem(product);
  };

  return (
    <Fragment>
      <SEO
        title="Products | Sabka Bazaar"
        content="Sabka Bazaar is a online grocery platform, where you can buy in a affordable rate"
        link="/products"
      />
      <SectionContainer>
        <LeftSection>
          {!isEmpty(categories) && (
            <Sidebar
              data={categories}
              handleCategoryClick={handleCategoryClick}
              selectedCategoryId={categoryId}
            />
          )}
        </LeftSection>
        <RightSection >
          {!isEmpty(filterProducts) ? (
            <Products
              data={filterProducts}
              handleProductClick={handleProductClick}
            />
          ) : isEmpty(filterProducts) && !isEmpty(categoryId) ? (
            <NoProductsContainer>
              <H1>No Products To Show</H1>
            </NoProductsContainer>
          ) : !isEmpty(products) ? (
            <Products
              data={products}
              handleProductClick={handleProductClick}
            />
          ) : (
            <NoProductsContainer>
              <H1>No Products To Show</H1>
            </NoProductsContainer>
          )}
        </RightSection>
      </SectionContainer>
    </Fragment>
  );
}

export default ProductsPage;
