import React from "react";
import {connect} from 'react-redux';
import {getCategories} from '../actions/homeActions';
import {getProducts,addToCart,resetCartReduxProcessData,resetCartData} from '../actions/productActions';
import SvgLoading from '../presentations/SvgLoading';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import LazyLoad from 'react-lazyload';
import toastr from 'toastr';
import { Modal } from "react-responsive-modal";
import Cart from '../presentations/Cart';
import Constants from '../constants';
import ProductItem from '../presentations/ProductItem';
class Products extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryData:[],
            productList:[],
            catId: '',
            openModal: false
        }

    }
    componentDidMount(){
        if(this.props.location.query.id){
            this.setState({catId:this.props.location.query.id});
        }
        this.props.getCategories();
        this.props.getProducts();
    }
    static getDerivedStateFromProps(props,state){
        if(props.homeApi.categoryData && props.homeApi.categorydata_searching_success){
            state.categoryData = props.homeApi.categoryData;
        }
        if(props.productInfo.productData && props.productInfo.searching_productdetails_success){
            state.productList = props.productInfo.productData;
        }
        if(props.productInfo.addCartData && props.productInfo.adding_to_cart_success){
            toastr.success(Constants.TEXTS.TOASTS.click_cart,Constants.TEXTS.TOASTS.item_added,{timeOut:1000});
            props.resetCartReduxProcessData();
        }
        return state;
    }
    makeActiveCategory=(e,id)=>{
        this.setState({catId:id ? id:e.target.value},()=>{
            this.getDropDwnSelectedVal(this.state.catId, this.state.categoryData);
        });
    }
    addToCart=(event,item)=>{
        this.props.addToCart(item);
    }
    checkoutComplete=()=>{
        this.props.resetCartData();
        this.onCloseModal();
        toastr.success(Constants.TEXTS.TOASTS.cart_emptied,Constants.TEXTS.TOASTS.order_placed,{timeOut:1000});
    }
    showCartView=()=>{
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
            const selItem = data.filter((item)=>{
                if(item.id)
                return id == item.id;
            });
            if(selItem.length){
                return selItem[0].id;
            }
        } else {
            return 'default';
        }
    }
    render(){
        const {homeApi,productInfo,router} = this.props;
        const {categoryData,productList,openModal} = this.state;
        return(<main className="products-page">
            <div className="overlay" style={{display: (productInfo.searching_productdetails|| productInfo.adding_to_cart  || homeApi.categorydata_searching) ? "block" : "none"}}>
                <div className="loading"><SvgLoading /></div>
            </div>
            <Header router={router} cartClick={this.showCartView} cartInfo={productInfo.cartItems}></Header>
            <div className="row content-area">
                <aside className="col span-3-of-12 left-menu">
                    <div className="prod-categories">
                        <ul className="cat-list">
                            {categoryData && categoryData.length ? categoryData.filter((item) => { return item.order >= 0 }).map((data, i) => (<li onClick={(event) => this.makeActiveCategory(event, data.id)} className={this.state.catId ? data.id == this.state.catId ? 'selected' : '' : ''} key={data.id}>
                                <p>{data.name}</p>
                            </li>)) : null}
                        </ul>  
                        
                    </div>
                </aside>
                <section className='dropdown-cat-list'>
                    <div className="select">
                        <select onChange={(event) => { this.makeActiveCategory(event) }} value={this.getDropDwnSelectedVal(this.state.catId, categoryData)} name="slct" id="slct">
                            <option value="default" disabled>Choose an option</option>
                            {categoryData && categoryData.length ? categoryData.filter((item) => { return item.order >= 0 }).map((data, i) => (<option value={data.id} className={this.state.catId ? data.id == this.state.catId ? 'selected' : '' : ''} key={data.id}>
                                {data.name}
                            </option>)) : null}                            
                        </select>
                    </div>
                </section>
                <section className="col span-9-of-12 product-list-area">
                    <div className="prod-list">
                        <ul className="rest-tiles">
                        {productList && productList.length ? productList.filter((data)=>{return this.state.catId ? this.state.catId == data.category : data }).map((item,i)=>(
                        <React.Fragment key={item.id}>
                            <ProductItem item={item} i={item.id} addToCart={this.addToCart} />
                        {/* <li key={i}>
                            <p className="prod-name" title={item.name}>{item.name}</p>
                            <div className="prod-detls">
                            <div className="prod-img">
                                <figure>
                            <LazyLoad height={75} offset={500} once>
                                <img className={`rocketImg`}
                                    alt={item.name}
                                    src={window.location.origin + item.imageURL}
                                />
                            </LazyLoad>
                            </figure>
                            </div>
                            <div className="prod-infodetails">
                            <div className="description-area">
                                <article className="prod-desc truncate-overflow" title={item.description}>{item.description}</article>
                            </div>
                            <div className="buy-area">
                                <div className="col span-1-of-2 price">
                                   <p> MRP Rs.{item.price}</p>
                                </div>
                                <div className="col span-1-of-2 buy-btn">
                                    <button className="btn" onClick={(event)=>this.addToCart(event,item)} aria-label={`Click on this button to buy ${item.name} for ${item.price} rupees.`}>Buy Now</button>
                                    <button className="btn small-screen-btn" onClick={(event)=>this.addToCart(event,item)} aria-label={`Click on this button to buy ${item.name} for ${item.price} rupees.`}>Buy Now @ Rs.{item.price}</button>
                                </div>
                            </div>
                            </div>
                            </div>
                        </li> */}
                        </React.Fragment>)) : null}
                        </ul>
                    </div>
                </section>
            </div>
            <Footer></Footer>
            {openModal ? (<Modal 
            open={openModal} 
            onClose={this.onCloseModal} 
            center
            aria-labelledby= {`My Cart(${productInfo.cartItems.legth} items)`}
            aria-describedby={Constants.TEXTS.MODAL.modal_desc}
            classNames={{
            overlayAnimationIn: '',
            overlayAnimationOut: '',
            modalAnimationIn: Constants.TEXTS.MODAL.customEnterModalAnimation,
            modalAnimationOut: Constants.TEXTS.MODAL.customLeaveModalAnimation
            }}
              animationDuration={800}
              showCloseIcon={false}>
            <Cart cartData={productInfo.cartItems} checkoutComplete={this.checkoutComplete} closeModal={this.onCloseModal}></Cart>
        </Modal>):null}
        </main>);
    }
}
function mapStateToProps(state){
    return{
        homeApi: state.homeApis,
        productInfo: state.productReducer
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
      getProducts: ()=>{dispatch(getProducts())},
      getCategories: ()=> {dispatch(getCategories())},
      resetCartData: ()=>{dispatch(resetCartData())},
      addToCart: (item)=>{dispatch(addToCart(item))},
      resetCartReduxProcessData: ()=>{dispatch(resetCartReduxProcessData())}
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Products);