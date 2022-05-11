import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import {
  Card,
  Button,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import axios from 'axios';
import * as api from '../api';
import './product.css';
import { sceneName } from 'aws-amplify';
import Footer from '../Footer/Footer';

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productid, setProductid] = useState('');
  const [categorieName, setCategorieName] = useState('Categories');
  const [active, setActive] = useState('');
  const [showfilteredProduct, setShowfilteredProduct] =
    useState(false);

  let showHomepageFilter = false;

  const location = useLocation();
  const { onAdd } = props;
  const productId = location.state;
  showHomepageFilter = location?.state?.check;
  const getProduct = async () => {
    if (productId?.id.length > 0) {
      setProductid(productId?.id);
    }
    await axios
      .get(api.get_product)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err, 'err from get product');
      });
  };
  console.log(product, 'product');

  const getCategories = () => {
    axios
      .get(api.get_categories)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err, 'err from get Categories');
      });
  };

  function sortbyorder(a, b) {
    return a.order - b.order;
  }
  categories.sort(sortbyorder);
  let filteredArray = product.filter(
    (data) => data.category === productid
  );

  console.log(filteredArray, ' out filteredArray');

  const handleClickButton = (data, name) => {
    setActive(data);
    setCategorieName(name);
    setShowfilteredProduct(
      (showfilteredProduct) => !showfilteredProduct
    );
    if (data === productid) {
      setProductid(productId?.id);
      getProduct();
      filteredArray.push(product);
    } else {
      setProductid(data);
    }
  };

  React.useEffect(() => {
    getProduct();
    getCategories();
  }, []);
  const activeStyle = { color: '#ff3333' };
  return (
    <div className="product   container">
      <div className="sidebar">
        {categories.map((data) => (
          <div>
            <p
              className="productList"
              style={active === data.id ? activeStyle : {}}
              onClick={() => handleClickButton(data.id)}
            >
              {data.name}
            </p>

            <hr />
          </div>
        ))}
      </div>
      <div>
        <div>
          <DropdownButton
            id="dropdown-item-button"
            title={categorieName}
            className="dropdown_Button"
          >
            {categories.map((data) => (
              <div>
                <Dropdown.Item
                  onClick={() =>
                    handleClickButton(data.id, data.name)
                  }
                >
                  {' '}
                  {data.name}
                </Dropdown.Item>
              </div>
            ))}
          </DropdownButton>
        </div>
        {!showHomepageFilter ? (
          <div>
            {filteredArray.length > 0 ? (
              <div className="productDisplay">
                {filteredArray.map((data) => (
                  <Card className="card_design">
                    <Card.Title className="card_title">
                      {data.name}
                    </Card.Title>
                    <div className="card_body">
                      <Card.Img
                        className="card_image"
                        src={data.imageURL}
                      />

                      <div className="description">
                        <p>{data.description}</p>
                      </div>
                    </div>
                    <Card.Body>
                      <Button
                        variant="danger"
                        onClick={() => onAdd(data)}
                      >
                        Buy Now @ Rs.{data.price}
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="productDisplay">
                {product.map((data) => (
                  <Card className="card_design">
                    <Card.Title className="card_title">
                      {data.name}
                    </Card.Title>
                    <div className="card_body">
                      <Card.Img
                        className="card_image"
                        src={data.imageURL}
                      />

                      <div className="description">
                        <p>{data.description}</p>
                      </div>
                    </div>
                    <Card.Body>
                      <Button
                        variant="danger"
                        onClick={() => onAdd(data)}
                      >
                        Buy Now @ Rs.{data.price}
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {!showfilteredProduct ? (
              <div className="productDisplay">
                {filteredArray.map((data) => (
                  <Card className="card_design">
                    <Card.Title className="card_title">
                      {data.name}
                    </Card.Title>
                    <div className="card_body">
                      <Card.Img
                        className="card_image"
                        src={data.imageURL}
                      />

                      <div className="description">
                        <p>{data.description}</p>
                      </div>
                    </div>
                    <Card.Body>
                      <Button
                        variant="danger"
                        onClick={() => onAdd(data)}
                      >
                        Buy Now @ Rs.{data.price}
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="productDisplay">
                {product.map((data) => (
                  <Card className="card_design">
                    <Card.Title className="card_title">
                      {data.name}
                    </Card.Title>
                    <div className="card_body">
                      <Card.Img
                        className="card_image"
                        src={data.imageURL}
                      />

                      <div className="description">
                        <p>{data.description}</p>
                      </div>
                    </div>
                    <Card.Body>
                      <Button
                        variant="danger"
                        onClick={() => onAdd(data)}
                      >
                        Buy Now @ Rs.{data.price}
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
