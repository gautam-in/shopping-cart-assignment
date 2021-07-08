import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SideNavListStyles from "../styles/SideNavListStyles";
import { connect } from "react-redux";
import { fetchCategories, setCategory } from "../../redux/actions";
import MobileCategoryStyle from "../styles/MobileCategoryStyle";
import MobileNavSelectedStyle from "../styles/MobileNavSelectedStyle";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileCategoryNav({
  categories,
  fetchCategories,
  setCategory,
  selected,
  }) {
  const router = useRouter();
  const categoryId = router.query.category;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
    setCategory(categoryId);
  }, [categoryId]);

  const onselectionchange = (e, category) => {
    e.stopPropagation();
    setCategory(category);
    setOpen(false);
    if (category.key === "products") {
      router.push("/products");
    } else {
      router.push(`/products?category=${category.id}`);
    }
  };

  const PRODUCTS = {
    name: "Products",
    key: "products",
    description: "All Products",
    enabled: true,
    order: 6,
    id: "5b68994e3d1a866534f51234",
  };

  const renderCategoryList = (categories) => {
    return categories?.map((category) => {
      if (category.id === categoryId) return;
      return (
        <SideNavListStyles
          key={category.id}
          order={category.order}
          active={category.id === categoryId}
          onClick={(e) => onselectionchange(e, category)}
        >
          {category.name}
        </SideNavListStyles>
      );
    });
  };

  return (
    <MobileCategoryStyle onClick={() => setOpen(!open)} open={open}>
      <MobileNavSelectedStyle>
        {selected?.name || "Products"}
       {open ? <FontAwesomeIcon icon={faChevronUp} className="chevron-icon"/> : <FontAwesomeIcon icon={faChevronDown} className="chevron-icon"/>} 
      </MobileNavSelectedStyle>

      <ul>
        {renderCategoryList(categories)}
        <SideNavListStyles
          key="all-products"
          active={!categoryId}
          onClick={(e) => onselectionchange(e, PRODUCTS)}
        >
          Products
        </SideNavListStyles>
      </ul>
    </MobileCategoryStyle>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    selected: state.categories.selected,
  };
};

export default connect(mapStateToProps, { fetchCategories, setCategory })(
  MobileCategoryNav
);
