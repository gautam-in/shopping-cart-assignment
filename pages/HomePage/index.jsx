// File: pages/HomePage/index.js

import React, { Component } from 'react';
import PageHeader from '../PageHeader';
import PageFooter from "../PageFooter";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row,
  Col,
  Button,
  CarouselCaption,
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  fetchBanner,
  nextSlide,
  prevSlide,
  gotoSlideIndex,
  animatingSlide,
  animationDone,
} from '../../redux_store/pages/HomePage/actions/homePageActions';
import LogIn from '../login';
import SignUp from '../signup';
import ProductList from '../product-list';

// Redux State Configutration
const mapStateToProps = state => ({
  activeIndex: state.HomePage.activeIndex,
  animating: state.HomePage.animating,
  loadingBanner: state.HomePage.loadingBanner,
  items: state.HomePage.items,
});

// Redux Dispatch Configutration
const mapDispatchToProps = {
  prevSlide: prevSlide,
  nextSlide: nextSlide,
  gotoSlideIndex: gotoSlideIndex,
  animatingSlide: animatingSlide,
  animationDone: animationDone,
  fetchBanner: fetchBanner,
};

// Next Component
class HomePage extends Component {
  state = {
    isOpen: false,
  }

  static getInitialProps({ store }) {
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBanner();
  }

  toggleHamburger = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { activeIndex, items } = this.props

    return (
      <>
        <div class="container">
          <PageHeader/>
          <ProductList/>
          <LogIn/>
          <SignUp/>
          {/* {Banner} */}
          <Carousel
            activeIndex={activeIndex}
            next={this.props.nextSlide}
            previous={this.props.prevSlide} >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.props.gotoSlideIndex} />
            {/* {Banner Images} */}
            {
              items.map((item) => {
                return (
                  <CarouselItem key={item.id}
                    onExiting={this.props.animatingSlide}
                    onExited={this.props.animationDone} >
                    <img src={item.bannerImageUrl} alt={item.bannerImageAlt} layout='fill' />
                    {/* <CarouselCaption captionText={item.bannerImageAlt} captionHeader={item.bannerImageAlt} /> */}
                  </CarouselItem>
                );
              })
            }
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.props.prevSlide} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.props.nextSlide} />
          </Carousel>
          <section className="mt-4 mb-4 box-bottom-shadow">
            <Row>
              <Col md = {6} className="mb-4">
                <img src="static/images/category/fruits.png" height = "200" alt="veggie"/>
              </Col>
              <Col md = {6} className="mt-4">
                <h3>Fruits & Vegetables</h3>
                <p>A variety of fresh fruits and Vegetables</p>
                <Button>Explore fruit-and-veg</Button>
              </Col>
            </Row>
          </section>
          <section className="mt-4 mb-4 box-bottom-shadow">
            <Row>
            <Col md = {6} className="mt-4">
                <h3>Bakery Cakes and Dairy</h3>
                <p>The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.</p>
                <Button>Explore bakery-cakes-dairy</Button>
              </Col>
              <Col md = {6} className="mb-4">
                <img src="static/images/category/bakery.png" height = "200" alt="veggie"/>
              </Col>
            </Row>
          </section>
          <section className="mt-4 mb-4 box-bottom-shadow">
            <Row>
              <Col md = {6} className="mb-4">
                <img src="static/images/category/beverages.png" height = "200" alt="veggie"/>
              </Col>
              <Col md = {6} className="mt-4">
                <h3>Beverages</h3>
                <p>Our beverage department will ensure your fridge is always fully stocked. shop for soda, juice, beer and more.</p>
                <Button>Explore beverages</Button>
              </Col>
            </Row>
          </section>
          <section className="mt-4 mb-4 box-bottom-shadow">
            <Row>
            <Col md = {6} className="mt-4">
                <h3>Beauty and hygiene</h3>
                <p>Buy beauty and personal care products online in india at the best prices.</p>
                <Button>Explore beauty-hygiene</Button>
              </Col>
              <Col md = {6} className="mb-4">
                <img src="static/images/category/beauty.png" height = "200" alt="veggie"/>
              </Col>
            </Row>
          </section>
          <section className="mt-4 mb-4">
            <Row>
              <Col md = {6}>
                <img src="static/images/category/baby.png" height = "200" alt="veggie"/>
              </Col>
              <Col md = {6} className="mt-4">
                <h3>Baby Care</h3>
                <p>Shop online for Baby Products, Diapers, Skin Care Products,etc.</p>
                <Button>Explore baby</Button>
              </Col>
            </Row>
          </section>
          <PageFooter/>
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// File: pages/HomePage/index.js
