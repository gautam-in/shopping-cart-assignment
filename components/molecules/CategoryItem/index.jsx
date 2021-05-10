import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategoryId } from "../../../redux_store/category/actions";
// import { useRouter } from 'next/router';
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

// Redux Dispatch Configutration
const mapDispatchToProps = {
   selectCategoryId: selectCategoryId,
};

class CategoryItem extends Component {
   
   handleClick = (event) =>{
      // const router = useRouter()
      this.props.selectCategoryId(event)
      // router.push('/product-list')
   }
   
   render() {
      const { item, index, selectedCategoryId } = this.props
      // console.log(this.props.item,"categ _ item home");
      console.log(selectedCategoryId,"selectedCategoryId");
      return (
         <section className="mt-4 mb-4 box-bottom-shadow">
            <Row>
               <Col md={6} className="mb-4">
                  <img src={item.imageUrl} atl={item.name} height="200" alt="veggie" />
               </Col>
               <Col md={6} className="mt-4">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Button data-index={ index} onClick={(event) => {this.handleClick(item.id)}}>Explore {item.name}</Button>
               </Col>
            </Row>
         </section>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoryItem)
