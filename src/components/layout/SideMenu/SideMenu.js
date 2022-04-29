import { Fragment } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "../../../pages/Products/Products.scss";
const SideMenu = (props) => {
  const categories = [
    { id: "5b6899953d1a866534f516e2", name: "Fruits & Vegetables" },
    { id: "5b6899123d1a866534f516de", name: "Bakery Cakes and Dairy" },
    { id: "5b675e5e5936635728f9fc30", name: "Beverages" },
    { id: "5b68994e3d1a866534f516df", name: "Beauty and Hygiene" },
    { id: "5b6899683d1a866534f516e0", name: "Baby Care" },
  ];
  return (
    <Fragment>
      <ListGroup className="product-categories-list">
        {categories.map((c) => (
          <ListGroupItem
            className="product-category-btn"
            key={c.id}
            onClick={() => props.filterProducts(c.id)}
          >
            {c.name}{" "}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Fragment>
  );
};

export default SideMenu;
