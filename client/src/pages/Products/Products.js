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
    display: ${(props) => (props.alignCenter ? "flex" : "")};
    justify-content: ${(props) => (props.alignCenter ? "center" : "")};
    align-items: ${(props) => (props.alignCenter ? "center" : "")};
    
    width: 80%;
    @media(max-width: 766px){
       width: 100%;
    }
`;

const NoProductsContainer = Styled.div`
    @media(max-width: 766px){
        margin-top: 60px;
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
    if (!isEmpty(categories) && !isEmpty(categoryId)) {
      setCategoriesData(categories);
      setSelectedCategoryId(categoryId);
    }
  }, [categories, categoryId]);

  const handleCategoryClick = (category) => {
    if (category.id === selectedCategoryId) {
      setCategoryId(categoriesData[0].id);
      setSelectedCategoryId(categoriesData[0].id);
    } else {
      setCategoryId(category.id);
      setSelectedCategoryId(category.id);
    }
  };

  /* products functionalities */
  useEffect(() => {
    if (!isEmpty(products)) {
      setProductsData(products);
    }
  }, [products]);

  useEffect(() => {
    if (!isEmpty(productsData) && !isEmpty(selectedCategoryId)) {
      let filteredProducts = filteredProductsData(
        productsData,
        selectedCategoryId
      );
      setFilterProductsData(filteredProducts);
    }
  }, [productsData, selectedCategoryId]);

  const handleProductClick = (product) => {
    addCartItem(product);
  };

  return (
    <Fragment>
     <SEO title="Products | Sabka Bazaar" content="Sabka Bazaar is a online grocery platform, where you can buy in a affordable rate" link="/products"/>
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
        <RightSection alignCenter={isEmpty(filterProductsData)}>
          {!isEmpty(filterProductsData) ? (
            <Products
              data={filterProductsData}
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
