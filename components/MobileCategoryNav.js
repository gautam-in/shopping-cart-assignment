import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SideNavListStyles from "./styles/SideNavListStyles";
import { connect } from "react-redux";
import { setCategory } from "../actions";
import MobileCategoryStyle from "./styles/MobileCategoryStyle";
import MobileNavSelectedStyle from "./styles/MobileNavSelectedStyle";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileCategoryNav({ categories, setCategory, selected }) {
  const router = useRouter();
  const categoryQuery = router.query.category;
  const [open, setOpen] = useState(false);

  const PRODUCTS = {
    name: "Products",
    key: "products",
    description: "All Products",
    enabled: true,
    order: 6,
    id: "5b68994e3d1a866534f51234",
  };

  useEffect(() => {
    categoryQuery &&
      (async () => {
        await setCategory(categoryQuery);
      })();
  }, [categoryQuery]);

  const onselectionchange = (e, category) => {
    e.stopPropagation();
    setOpen(false);
    if (category.key === "products") {
      router.push("/products");
    } else {
      router.push(`/products?category=${category.id}`);
    }
  };

  const renderCategoryList = (categories) => {
    return categories?.map((category) => {
      if (category.id === categoryQuery) return;
      return (
        <SideNavListStyles
          key={category.id}
          order={category.order}
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
        {selected ? selected.name : "Products"}
        {open ? (
          <FontAwesomeIcon icon={faChevronUp} className="chevron-icon" />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        )}
      </MobileNavSelectedStyle>

      <ul>
        {renderCategoryList(categories)}
        <SideNavListStyles
          key="all-products"
          active={!categoryQuery}
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
    selected: state.categories.selected,
  };
};

export default connect(mapStateToProps, { setCategory })(MobileCategoryNav);
