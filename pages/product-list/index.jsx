import React, {Component} from "react";
import {Row, Col,Button,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, } from 'reactstrap';
import PageHeader from '../PageHeader';
import Pagefooter from "../PageFooter";
import {fetchProduct} from '../../redux_store/pages/ProductListPage/actions/productListPageActions';
import { connect } from 'react-redux';

// Redux State Configutration
const mapStateToProps = state => ({
    loadingProduct: state.ProductListPage.loadingProducts,
    items: state.ProductListPage.items,
  });
  
  // Redux Dispatch Configutration
  const mapDispatchToProps = {
    fetchProduct: fetchProduct,
  };

class ProductList extends Component {
    constructor(props) {
        super(props);
      }
    componentDidMount() {
        this.props.fetchProduct();
      }

    render(){
        const {items} = this.props
        return(
            <>
            <div class="container">
            <PageHeader/>
            <Row>
                <Col md={3} className='bg-light'>
                    <ul>
                        <li>
                            good
                        </li>
                        <li>
                            gorming
                        </li>
                    </ul>
                </Col>
                <Col md={9}>
                    <Row>
                        {items && items.map((item) =>{
                            return(
                                <Col md={3} className="pl-1 pr-1">
                                    <Card className="mb-3 product-card">
                                        <CardText>{item.name}</CardText>
                                        <CardImg top width="100%" src={item.imageURL} alt="Card image cap" />
                                        <CardBody>
                                            <CardText className="desc">{item.description}</CardText>
                                            <span>
                                            <small>MRP {item.price}</small> 
                                            <Button><small>Buy Now</small></Button>
                                            </span>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
            <Pagefooter/>
            </div>
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);