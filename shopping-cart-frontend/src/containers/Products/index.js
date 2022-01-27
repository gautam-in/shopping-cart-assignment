import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Products.scss";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../constants";
import { CategoryListing } from "./CategoryListing";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { Product } from "./Product";
import { Error } from "../../components/Error";

export const Products = () => {
  const [{ apiData: products = [], error }] = useFetch(api.products);

  let [searchParams] = useSearchParams();

  const filteredProducts = useMemo(() => {
    let catId = searchParams.get("cat_id");

    return catId
      ? products.filter((category) => {
          return category.category === catId;
        })
      : products;
  }, [searchParams, products]);

  return (
    <Container className="products">
      <Row className="p-0">
        <Col lg={2} md={4}>
          <CategoryListing />
        </Col>
        <Col className="mt-1">
          {error && <Error />}
          <Row className="product-listing px-lg-2">
            {filteredProducts.map((product, i) => {
              return (
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex m-0 px-1 px-sm-0"
                  key={product.id}
                >
                  <Product {...product} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
