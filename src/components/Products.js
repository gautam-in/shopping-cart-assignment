import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {getCategories} from '../actions/homeActions';
import {getProducts,addToCart,resetCartReduxProcessData,resetCartData} from '../actions/productActions';
import Handlebars from "handlebars";
import SvgLoading from '../presentations/SvgLoading';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import $ from 'jquery';
import LazyLoad, { forceCheck } from 'react-lazyload';
import Slider from 'react-slick';
import toastr from 'toastr';
import { Modal } from "react-responsive-modal";
import Cart from '../presentations/Cart';
// import closeIcon from '../assets/images/cancel.png';
class Products extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryData:[],
            productList:[],
            catId: '',
            openModal: false
            // aliasProdList: []
        }
        this.makeActiveCategory = this.makeActiveCategory.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.showCartView = this.showCartView.bind(this);
        this.checkoutComplete = this.checkoutComplete.bind(this);
    }
    componentDidMount(){
        if(this.props.location.query.id){
            this.setState({catId:this.props.location.query.id});
        }
        this.props.dispatch(getCategories());
        this.props.dispatch(getProducts());
    }
    static getDerivedStateFromProps(props,state){
        if(props.homeApi.categoryData && props.homeApi.categorydata_searching_success){
            state.categoryData = props.homeApi.categoryData;
            console.log('catData',state.categoryData);
        }
        if(props.productInfo.productData && props.productInfo.searching_productdetails_success){
            state.productList = props.productInfo.productData;
            console.log('prodLst',state.productList);
        }
        if(props.productInfo.addCartData && props.productInfo.adding_to_cart_success){
            toastr.success('Click on cart to buy','Item Added!',{timeOut:1000});
            props.dispatch(resetCartReduxProcessData());
        }
        return state;
    }
    makeActiveCategory=(e,id)=>{
        var that = e;
        this.setState({catId:id ? id:e.target.value});
        setTimeout(()=>{
            this.getDropDwnSelectedVal(this.state.catId, this.state.categoryData)
        });
    }
    addToCart=(event,item)=>{
        this.props.dispatch(addToCart(item));
    }
    checkoutComplete=()=>{
        this.props.dispatch(resetCartData());
        this.onCloseModal();
        toastr.success('','Congratulations, Order Placed',{timeOut:1000});
    }
    showCartView=()=>{
        console.log('cart view has to be shown');
        this.setState({openModal: true});
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    }
    
    onCloseModal = () => {
        this.setState({ openModal: false });
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
    };
    getDropDwnSelectedVal=(id,data)=>{
        if(id && data){
            let selItem = data.filter((item)=>{
                if(item.id)
                return id == item.id;
            })
            if(selItem.length){
                return selItem[0].id;
            }
        } else {
            return 'default';
        }
    }
    render(){
        return(<div className="products-page">
            <div className="overlay" style={{display: (this.props.productInfo.searching_productdetails|| this.props.productInfo.adding_to_cart  || this.props.homeApi.categorydata_searching) ? "block" : "none"}}>
                <div className="loading"><SvgLoading /></div>
            </div>
            <Header cartClick={this.showCartView} cartInfo={this.props.productInfo.cartItems}></Header>
            <div className="row content-area">
                <div className="col span-3-of-12 left-menu">
                    <div className="prod-categories">
                        <ul className="cat-list">
                            {this.state.categoryData && this.state.categoryData.length ? this.state.categoryData.filter((item) => { return item.order >= 0 }).map((data, i) => (<li onClick={(event) => this.makeActiveCategory(event, data.id)} className={this.state.catId ? data.id == this.state.catId ? 'selected' : '' : ''} key={i}>
                                <p>{data.name}</p>
                            </li>)) : null}
                        </ul>  
                        
                    </div>
                </div>
                <div className='dropdown-cat-list'>
                    <div className="select">
                        <select onChange={(event) => { this.makeActiveCategory(event) }} value={this.getDropDwnSelectedVal(this.state.catId, this.state.categoryData)} name="slct" id="slct">
                            <option value="default" disabled>Choose an option</option>
                            {this.state.categoryData && this.state.categoryData.length ? this.state.categoryData.filter((item) => { return item.order >= 0 }).map((data, i) => (<option value={data.id} className={this.state.catId ? data.id == this.state.catId ? 'selected' : '' : ''} key={i}>
                                {data.name}
                            </option>)) : null}
                            {/* selected={data.id == this.state.catId} */}
                            {/* <option value="1">Pure CSS</option>
                                    <option value="2">No JS</option>
                                    <option value="3">Nice!</option> */}
                        </select>
                    </div>
                </div>
                <div className="col span-9-of-12 product-list-area">
                    <div className="prod-list">
                        <ul className="rest-tiles">
                        {this.state.productList && this.state.productList.length ? this.state.productList.filter((data)=>{return this.state.catId ? this.state.catId == data.category : data }).map((item,i)=>(<li key={i}>
                            <p className="prod-name" title={item.name}>{item.name}</p>
                            <div className="prod-detls">
                            <div className="prod-img">
                            <LazyLoad height={75} offset={500} once>
                                <img className={`rocketImg`}
                                    alt={item.name}
                                    src={window.location.origin + item.imageURL}
                                />
                            </LazyLoad>
                            </div>
                            <div className="prod-infodetails">
                            <div className="description-area">
                                <p className="prod-desc truncate-overflow" title={item.description}>{item.description}</p>
                            </div>
                            <div className="buy-area">
                                <div className="col span-1-of-2 price">
                                   <p> MRP Rs.{item.price}</p>
                                </div>
                                <div className="col span-1-of-2 buy-btn">
                                    <button className="btn" onClick={(event)=>this.addToCart(event,item)}aria-label={`Click on this button to buy ${item.name} for ${item.price} rupees.`}>Buy Now</button>
                                    <button className="btn small-screen-btn" onClick={(event)=>this.addToCart(event,item)}aria-label={`Click on this button to buy ${item.name} for ${item.price} rupees.`}>Buy Now @ Rs.{item.price}</button>
                                </div>
                            </div>
                            </div>
                            </div>
                        </li>)) : null}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            {this.state.openModal ? (<Modal 
            open={this.state.openModal} 
            onClose={this.onCloseModal} 
            center
            aria-labelledby= {`My Cart(${this.props.productInfo.cartItems.legth} items)`}
            aria-describedby="Hurry up! You won't find it cheaper anywhere."
            classNames={{
                overlayAnimationIn: '',
                overlayAnimationOut: '',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
              }}
              animationDuration={800}
            //   closeIcon={closeIcon}
              showCloseIcon={false}>
            <Cart cartData={this.props.productInfo.cartItems} checkoutComplete={this.checkoutComplete} closeModal={this.onCloseModal}></Cart>
        </Modal>):null}
        </div>);
    }
}
function mapStateToProps(state){
    return{
        homeApi: state.homeApis,
        productInfo: state.productReducer
    }
}
export default connect(mapStateToProps)(Products);