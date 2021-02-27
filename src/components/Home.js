// import require from 'require';
// const fs = require('fs');
import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {getOffers,getCategories} from '../actions/homeActions';
import Handlebars from "handlebars";
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import $ from 'jquery';
import {getViewPortDimensions} from '../utils';
import LazyLoad, { forceCheck } from 'react-lazyload';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
// import nicescroll from 'jquery.nicescroll';
// import cartSucc from '../../server/addToCart/index.post.json';
// var data = JSON.parse(fs.readFileSync(cartSucc).toString());
// console.log(data);
// import "./styles.css";

const hbr = `
<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
"{{kids.length}} kids:</p>" +
"<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>
`;

const template = Handlebars.compile(hbr);
const data = {
    name: "Alan",
    hometown: "Somewhere, TX",
    kids: [{ name: "Jimmy", age: "12" }, { name: "Sally", age: "4" }]
  };
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
          bannerData: [],
          categoryData: [],
          dimensions:{}
        }
        this.navigateToPlp = this.navigateToPlp.bind(this);
        this.showCartView = this.showCartView.bind(this);
        this.doResizeActions = this.doResizeActions.bind(this);
    }
    componentDidMount(){
      this.props.dispatch(getOffers());
      this.props.dispatch(getCategories());
      window.addEventListener('resize',()=>{
        // console.log('resized');
        this.doResizeActions();
      },false);
    }
    static getDerivedStateFromProps(props,state){
      // console.log(props);
      if(props.homeApi.bannerData && props.homeApi.bannerdata_searching_success){
        // console.log(props.homeApi.bannerData);
        state.bannerData = props.homeApi.bannerData;
        setTimeout(()=>{
          forceCheck();
        },0);
      }
      if(props.homeApi.categoryData && props.homeApi.categorydata_searching_success){
        state.categoryData = props.homeApi.categoryData;
        // console.log('catData',state.categoryData);
      }
      return state;
    }
    doResizeActions=()=>{
      let dimensions = getViewPortDimensions();
      console.log('Dimensions',dimensions);
      this.setState({dimensions: dimensions});
    }
    showCartView=()=>{
      console.log('Need to show cart view');
    }
    navigateToPlp=(e,data)=>{
      if(data)
      this.props.dispatch(push('/products?cat='+data.name+'&id='+data.id));
    }
  render(){
    var settings = {
      dots: true
    };
  return (
    <div className="App home-page">
      <Header cartClick={this.showCartView} cartInfo={this.props.productInfo.cartItems}></Header>
      {/* <div dangerouslySetInnerHTML={{ __html: template(data) }} /> */}
      <div className="offerArea content-seperator">
        <div className="slider-container">
          <Slider {...settings}>
            {this.state.bannerData && this.state.bannerData.length ? this.state.bannerData.map((data, idx) => (
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
          {this.state.categoryData && this.state.categoryData.length ? this.state.categoryData.filter((item)=>{return item.order>= 0}).map((data,i)=>(<div className="single-banner-area content-seperator" key={i}>
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
    </div>
  );
  }
}
function mapStateToProps(state){
  return{
    signIn: state.signinReducer,
    signup: state.signUpReducer,
    homeApi: state.homeApis,
    productInfo:state.productReducer
  }
}
export default connect(mapStateToProps)(Home);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
