import React, { Component } from 'react';
import {
   Col,
   Button,
   Card,CardBody,CardImg,CardText,
} from 'reactstrap';
import style from './productListItems.module.scss';

class ProductListItems extends Component {
   
   render() {
      const { item, index } = this.props
      return (
        <Col md={3}>
            <Card className="mb-3 product-card">
                <CardText>Apple</CardText>
                <CardImg top width="100%" src="/static/images/products/fruit-n-veg/apple.jpg" alt="Card image cap" />
                <CardBody>
                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                    <CardText>The bright red coloured and heart shaped ,Washington apples are crunchy.</CardText>
                    <Button>Buy Now</Button>
                </CardBody>
            </Card>
        </Col>
      )
   }
}

export default ProductListItems;