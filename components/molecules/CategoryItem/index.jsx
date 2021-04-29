import React, { Component } from 'react';

import {
   Row,
   Col,
   Button,
} from 'reactstrap';

class CategoryItem extends Component {
   
   render() {
      const { item, index } = this.props
      return (
         <section className="mt-4 mb-4 box-bottom-shadow">
            <Row>
               <Col md={6} className="mb-4">
                  <img src={item.imageUrl} atl={item.name} height="200" alt="veggie" />
               </Col>
               <Col md={6} className="mt-4">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Button data-index={ index}>Explore {item.name}</Button>
               </Col>
            </Row>
         </section>
      )
   }
}

export default CategoryItem
