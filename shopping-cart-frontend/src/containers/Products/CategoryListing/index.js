import { api } from "../../../constants";
import { useFetch } from "../../../hooks/useFetch";
import ListGroup from "react-bootstrap/ListGroup";
import "./CategoryListing.scss";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const CategoryListing = () => {
  const [{ apiData: categories = [] }] = useFetch(api.categories);

  let [searchParams] = useSearchParams();

  const [selectedCategory, setCategory] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (categories.length !== 0) {
      let catId = searchParams.get("cat_id");
      setCategory(catId);
    }
  }, [categories, searchParams]);

  const selectedCategoryName = useMemo(() => {
    return categories.find((cat) => cat.id === selectedCategory);
  }, [selectedCategory, categories]);

  const onDropdownToggle = () => {
    setToggle(!toggle);
  };

  const sortedCategories = categories?.sort((a, b) => a.order - b.order);
  const { sm } = useWindowSize();

  return (
    <div className="category-listing">
      {sm ? (
        <Dropdown
          className="d-inline"
          drop="down"
          autoClose={true}
          onToggle={onDropdownToggle}
          show={toggle}
        >
          <Dropdown.Toggle id="dropdown-autoclose-true btn-primary">
            {selectedCategoryName?.name || "Select"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <List
              categories={sortedCategories}
              selectedCategory={selectedCategory}
              onClick={onDropdownToggle}
              sm={sm}
            />
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <List
          categories={categories}
          selectedCategory={selectedCategory}
          sm={sm}
        />
      )}
    </div>
  );
};

const List = ({ categories, selectedCategory, onClick, sm }) => {
  const navigate = useNavigate();

  const onCategoryClick = (id) => {
    if (sm) {
      onClick();
      navigate(`/products?cat_id=${id}`);
    } else {
      //	On clicking the selected category again, the filter will reset and all products will be displayed.
      if (selectedCategory === id) navigate(`/products`);
      else navigate(`/products?cat_id=${id}`);
    }
  };

  let Wrapper = !sm ? "div" : Dropdown.Item;
  return (
    <ListGroup>
      <>
        {categories.map((category) => {
          return category?.enabled ? (
            <Wrapper key={category.id}>
              <ListGroup.Item
                action
                onClick={() => onCategoryClick(category.id)}
                active={selectedCategory === category.id}
                key={category.id}
              >
                {category.name}
              </ListGroup.Item>
            </Wrapper>
          ) : null;
        })}
      </>
    </ListGroup>
  );
};
