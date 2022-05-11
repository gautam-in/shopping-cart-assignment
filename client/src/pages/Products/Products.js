import { useState, useEffect, useContext, Fragment } from "react";
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
  const { categories, getCategoriesData, categoryId, setCategoryId } =
    categoriesContext;
  const { products, getProductsData } = productsContext;
  const { addCartItem } = cartContext;

  /* dispatching actions to fetch categories and products data from API */
  useEffect(() => {
    if (isEmpty(categories)) {
      getCategoriesData();
    }

    if (isEmpty(products)) {
      getProductsData();
    }
  }, []);

  /* maintaining the local store values */
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [filterProductsData, setFilterProductsData] = useState([]);

  /* categories functionalities */
  useEffect(() => {
    if (!isEmpty(categories)) {
      setCategoriesData(categories);
    }
  }, [categories]);

  const handleCategoryClick = (category) => {
    if (category.id === selectedCategoryId) {
      setCategoryId("");
      setSelectedCategoryId("");
    } else {
      setCategoryId(category.id);
      setSelectedCategoryId(category.id);
    }
  };

  useEffect(() => {
    if(!isEmpty(categoryId)){
      setSelectedCategoryId(categoryId)
    }
  },[categoryId])

  /* products functionalities */
  useEffect(() => {
    if (!isEmpty(products)) {
      setProductsData(products);
    }
  }, [products]);

  useEffect(() => {
    let filteredProducts = filteredProductsData(
      productsData,
      selectedCategoryId
    );
    setFilterProductsData(filteredProducts);
  }, [selectedCategoryId]);

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
          {!isEmpty(categoriesData) && (
            <Sidebar
              data={categoriesData}
              handleCategoryClick={handleCategoryClick}
              selectedCategoryId={selectedCategoryId}
            />
          )}
        </LeftSection>
        <RightSection >
          {!isEmpty(filterProductsData) ? (
            <Products
              data={filterProductsData}
              handleProductClick={handleProductClick}
            />
          ) : isEmpty(filterProductsData) && !isEmpty(selectedCategoryId) ? (
            <NoProductsContainer>
              <H1>No Products To Show</H1>
            </NoProductsContainer>
          ) : !isEmpty(productsData) ? (
            <Products
              data={productsData}
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
