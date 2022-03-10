import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, Carousel, Card, Button } from "react-bootstrap";
import  {useNavigate} from 'react-router-dom';
import "../home/home.scss";
// import Banners from "../../../server/banners/index.get.json"

const Home = () => {
  let [banners, setBanners] = useState([]);
  let [categories, setCategories] = useState([]);
  const navigateToProducts = useNavigate();

  useEffect(() => {
    axios
    .get("http://localhost:3000/banners")
    .then(response => {
      
      setBanners(response.data);
    })
    .catch(function(error) {
        // manipulate the error response here
    });
    
    axios
    .get("http://localhost:3000/categories")
    .then(response => {
      setCategories(response.data);
    })
    .catch(function(error) {
        // manipulate the error response here
    });
  }, []);

  return (
    <section id="home-wrapper">
    <Container>
       <Row>
         <Col md={12}>
          <Carousel className="category-shadow">
            {
              banners ? banners.map(record => 
                <Carousel.Item key={record.id} id={record.id}>
                  <img
                    className="d-block w-100"
                    id={record.id}
                    src={record.bannerImageUrl}
                    alt={record.bannerImageAlt}
                    title={record.bannerImageAlt}
                  />
                </Carousel.Item>
              ) : null
            }
          </Carousel>
         </Col>
       </Row>
    </Container>
    <Container>
        { 
          categories ? categories.sort((a, b) => a.order - b.order).map(catRecord => 
            catRecord.order !== -1 ? 
            <Row key={catRecord.key} className="category-wrapper category-shadow">
              <Col md={4}>
                  <img className="d-block w-100" id={catRecord.id} alt={catRecord.name} title={catRecord.name} src={catRecord.imageUrl} />
              </Col>
              <Col md={8}>
                <Card data-test="categories">
                    <Card.Body>
                      <Card.Title>{catRecord.name}</Card.Title>
                      <Card.Text>
                        {catRecord.description}
                      </Card.Text>
                      <Button data-test="categoryButton" className="categoryBtn" variant="primary" onClick={() => navigateToProducts("/products") }>{`Explore ${catRecord.key}`}</Button>
                    </Card.Body>
                  </Card>
              </Col>
            </Row> : null
           ) : null
          }
      </Container>
    </section>
  );
};

export default Home;