import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategoryId } from "../../../redux_store/category/actions";
import { useRouter } from 'next/router';
import {
   Row,
   Col,
   Button,
} from 'reactstrap';

// Redux State Configutration
const mapStateToProps = state => {
   return {
      selectedCategoryId: state.category.selectedId,
   }
}

// for functional components we need to write mapDispatchToProps this way
const mapDispatchToProps = dispatch => ({
   actions: {
      selectCategoryId: (id) => selectCategoryId(id)(dispatch),
   }
});

function CategoryItem({ selectedCategoryId, item, index, actions }) {
   const router = useRouter()
   const handleClick = (category_id) => {
      actions.selectCategoryId(category_id)
      router.push('/product-list')
   }

   // console.log(this.props.item,"categ _ item home");
   console.log(selectedCategoryId, actions, "selectedCategoryId");
   return (
      <section className="mt-4 mb-4 box-bottom-shadow">
         <Row>
            <Col md={6} className="mb-4">
               <img src={item.imageUrl} atl={item.name} height="200" />
            </Col>
            <Col md={6} className="mt-4">
               <h3>{item.name}</h3>
               <p>{item.description}</p>
               <Button data-index={index} onClick={(event) => { handleClick(item.id) }}>Explore {item.name}</Button>
            </Col>
         </Row>
      </section>
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
