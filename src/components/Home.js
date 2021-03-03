import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getOffers,getCategories} from '../actions/homeActions';
import {resetCartData} from '../actions/productActions';
import SvgLoading from '../presentations/SvgLoading';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import {getViewPortDimensions} from '../utils';
import LazyLoad, { forceCheck } from 'react-lazyload';
import Slider from 'react-slick';
import { Modal } from "react-responsive-modal";
import Cart from '../presentations/Cart';
import Constants from '../constants';
import toastr from 'toastr';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
          currentInstance: this,
          bannerData: [],
          categoryData: [],
          dimensions:{},
          openModal: false,
          forceCheckSliderImage: false
        }
        this.navigateToPlp = this.navigateToPlp.bind(this);
        this.showCartView = this.showCartView.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.checkoutComplete = this.checkoutComplete.bind(this);
        this.forceCheckSliderImage = this.forceCheckSliderImage.bind(this);
    }
    componentDidMount(){
      this.props.getOffers();
      this.props.getCategories();
    }
    static getDerivedStateFromProps(props,state){
      if(props.homeApi.bannerData && props.homeApi.bannerdata_searching_success){
        state.bannerData = props.homeApi.bannerData;
        state.currentInstance.forceCheckSliderImage();
      }
      if(props.homeApi.categoryData && props.homeApi.categorydata_searching_success){
        state.categoryData = props.homeApi.categoryData;
      }
      return state;
    }
    forceCheckSliderImage=()=>{
      forceCheck();
    }
    doResizeActions=()=>{
      let dimensions = getViewPortDimensions();
      this.setState({dimensions: dimensions});
    }
  checkoutComplete = () => {
    this.props.resetCartData();
    this.onCloseModal();
    toastr.success(Constants.TEXTS.TOASTS.cart_emptied,Constants.TEXTS.TOASTS.order_placed,{timeOut:1000});
  }
  showCartView = () => {
    this.setState({ openModal: true });
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }

  onCloseModal = () => {
    this.setState({ openModal: false });
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
  };
    navigateToPlp=(e,data)=>{
      if(data)
      this.props.router.push('/products?cat='+data.name+'&id='+data.id);
    }
  render(){
    const settings = {
      dots: true
    };
    const {props} = this;
    const {state} = this;
  return (
    <div className="App home-page">
      <div className="overlay" style={{display: (props.homeApi.bannerdata_searching || props.homeApi.categorydata_searching) ? "block" : "none"}}>
            <div className="loading"><SvgLoading /></div>
      </div>
      <Header router={props.router} cartClick={this.showCartView} cartInfo={props.productInfo.cartItems}></Header>
      <div className="offerArea content-seperator">
        <div className="slider-container">
          <Slider {...settings}>
            {state.bannerData && state.bannerData.length ? state.bannerData.map((data, idx) => (
              <div key={idx}>
                <LazyLoad height={200} once>
                  <img data-id={data.id} src={window.location.origin + data.bannerImageUrl} alt={data.bannerImageAlt} />
                </LazyLoad>
              </div>
            )) : null}
          </Slider>
        </div>
      </div>
      <div className="category-banners-area">
          {state.categoryData && state.categoryData.length ? state.categoryData.filter((item)=>{return item.order>= 0}).map((data,i)=>(<div className="single-banner-area content-seperator" key={i}>
            {data.imageUrl && (<div>
            <div className="col span-1-of-2">
              {i%2 != 0 ? (<div className="row login-left-area">
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    <button className="btn" aria-label={`Click on explore ${data.name} button to view products`} onClick={(event)=>this.navigateToPlp(event,data)}>{'Explore '+data.name}</button>
              </div>) : (<div className="row banner-right-area">
                <LazyLoad height={25} once>
                  <img src={window.location.origin + data.imageUrl} alt={data.name} />
                </LazyLoad>
              </div>)}
            </div>
            <div className="col span-1-of-2">
            {i%2 != 0 ? (<div className="row banner-right-area">
                <LazyLoad height={25} once>
                  <img src={window.location.origin + data.imageUrl} alt={data.name} />
                </LazyLoad>
              </div>) : (<div className="row login-left-area">
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    <button className="btn" aria-label={`Click on explore ${data.name} button to view products`} onClick={(event)=>this.navigateToPlp(event,data)}>{'Explore '+data.name}</button>
              </div>)}
            </div>
            </div>)}
          </div>)) : null}
      </div>
      <Footer></Footer>
      {state.openModal ? (<Modal
        open={state.openModal}
        onClose={this.onCloseModal}
        center
        aria-labelledby={`My Cart(${props.productInfo.cartItems.legth} items)`}
        aria-describedby={Constants.TEXTS.MODAL.modal_desc}
        classNames={{
          overlayAnimationIn: '',
          overlayAnimationOut: '',
          modalAnimationIn: Constants.TEXTS.MODAL.customEnterModalAnimation,
          modalAnimationOut: Constants.TEXTS.MODAL.customLeaveModalAnimation
        }}
        animationDuration={800}
        showCloseIcon={false}>
        <Cart cartData={props.productInfo.cartItems} checkoutComplete={this.checkoutComplete} closeModal={this.onCloseModal}></Cart>
      </Modal>) : null}
    </div>
  );
  }
}
function mapStateToProps(state){
  return{
    homeApi: state.homeApis,
    productInfo:state.productReducer
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return{
    getOffers: ()=>{dispatch(getOffers())},
    getCategories: ()=> {dispatch(getCategories())},
    resetCartData: ()=>{dispatch(resetCartData())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));
