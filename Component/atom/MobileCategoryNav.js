import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SideNavListStyles from "../styles/SideNavListStyles";
import MobileCategoryStyle from "../styles/MobileCategoryStyle";
import MobileNavSelectedStyle from "../styles/MobileNavSelectedStyle";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../constant/index";

function MobileCategoryNav({ categories }) {
  const router = useRouter();
  const categoryId = router.query.category;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});

  const FindCategory = (categoryId) => {
    let selectedCategory = categories?.filter(
      (ele) => ele.id === categoryId
    )[0];
    setSelected(selectedCategory);
  };

  useEffect(() => {
    FindCategory(categoryId);
  }, [categoryId]);

  const onselectionchange = (e, category) => {
    e.stopPropagation();
    FindCategory(category);
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

  return (
    <MobileCategoryStyle onClick={() => setOpen(!open)} open={open}>
      <MobileNavSelectedStyle>
        {selected?.name || "Products"}
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className="chevron-icon"
        />
      </MobileNavSelectedStyle>

      <ul>
        {categories?.map((category) => {
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
        })}
        <SideNavListStyles
          key="all-products"
          active={!categoryId}
          onClick={(e) => onselectionchange(e, PRODUCTS)}
        >
          {Product}
        </SideNavListStyles>
      </ul>
    </MobileCategoryStyle>
  );
}

export default MobileCategoryNav;
