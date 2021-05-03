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
      // console.log(item);
      return (
        <Col md={3}>
            <Card className="mb-3 product-card">
                <CardText className={style.productHeading}>{item && item.name}</CardText>
                <CardImg top width="100%" src={item && item.imageURL} alt="Card image cap" />
                <CardBody>
                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                    <CardText className={style.productCard}>{item && item.description}</CardText>
                    <span className="align-middle">Rs : {item && item.price}</span><Button className="float-right">Buy Now</Button>
                </CardBody>
            </Card>
        </Col>
      )
   }
}

export default ProductListItems;