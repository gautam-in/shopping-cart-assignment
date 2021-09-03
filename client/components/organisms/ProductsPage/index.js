import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import ProductList from "../../molecules/ProductList";
import SectionWrapper from "../../atoms/SectionWrapper";
import {
  CategoriesFilter,
  CategoriesFilterDropdown,
  CategoryFilterItem,
  ProductsPageWrapper,
} from "./ProductsPage.styles";
import Button from "../../atoms/Button";
import { ChevronDown } from "../../../global/styles/icons";

const ProductsPage = ({ categoriesList, productsList, deviceType }) => {
  if (!productsList.length) return null;

  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [isDropdownOpen, toggleDropdown] = useState(false);

  const router = useRouter();
  const isMobile = deviceType === "MOBILE";
  const filteredProductsList = selectedCategory
    ? productsList.filter((product) => product.category === selectedCategory)
    : productsList;

  useEffect(() => {
    const { selectedCategory: selectedCategoryId } = router?.query || {};
    if (selectedCategoryId) {
      setSelectedCategory(selectedCategoryId);
    }
  }, []);

  const getCategoryName = (categoryId) =>
    categoriesList.find((category) => category.id === categoryId)?.name;

  const handleKeyPress = useCallback((e) => {
    if (e.keyCode === 13) {
      onCategoryChange(e);
    }
  });

  const onCategoryChange = useCallback((e) => {
    const selectedCategoryId = e.target.getAttribute("value");
    if (selectedCategoryId === selectedCategory) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(selectedCategoryId);
    }
    toggleDropdown(false);
  });

  const categoryName = getCategoryName(selectedCategory);

  return (
    <ProductsPageWrapper isMobile={isMobile}>
      {!!categoriesList.length && (
        <>
          {isMobile ? (
            <CategoriesFilterDropdown>
              <Button
                id="categories-filter"
                name={`Selected category - ${categoryName}`}
                onClick={() => toggleDropdown(!isDropdownOpen)}
              >
                <span>
                  {selectedCategory ? categoryName : "Select Category"}
                </span>
                <span>
                  <ChevronDown />
                </span>
              </Button>
              {isDropdownOpen && (
                <CategoriesFilter>
                  {categoriesList.map((category) => (
                    <CategoryFilterItem
                      tabIndex="0"
                      role="listitem"
                      key={category.id}
                      value={category.id}
                      title={category.name}
                      onClick={onCategoryChange}
                      onKeyUp={handleKeyPress}
                      aria-selected={category.id === selectedCategory}
                      selected={category.id === selectedCategory}
                    >
                      {category.name}
                    </CategoryFilterItem>
                  ))}
                </CategoriesFilter>
              )}
            </CategoriesFilterDropdown>
          ) : (
            <CategoriesFilter role="list" aria-label="Categories filter">
              {categoriesList.map((category) => (
                <CategoryFilterItem
                  tabIndex="0"
                  role="listitem"
                  key={category.id}
                  value={category.id}
                  title={category.name}
                  onClick={onCategoryChange}
                  onKeyUp={handleKeyPress}
                  aria-selected={category.id === selectedCategory}
                  selected={category.id === selectedCategory}
                >
                  {category.name}
                </CategoryFilterItem>
              ))}
            </CategoriesFilter>
          )}
        </>
      )}
      <SectionWrapper>
        <ProductList productsList={filteredProductsList} />
      </SectionWrapper>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
