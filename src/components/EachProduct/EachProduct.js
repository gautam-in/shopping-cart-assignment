import './eachProduct.styles.scss';
import { connect } from 'react-redux';
import { setCartItems } from '../../redux/cart/cart.action';
import { Button,message} from 'antd';
import { withRouter } from "react-router";
const EachProduct = ({ filteredList,setCartItems,currentUser,history}) => {
    const onSetOfCartItems=(listItems)=>{
        if(currentUser){
            setCartItems(listItems);
            message.success('Product added to cart successfully');
        }

        else{
            history.push('/login')
        }
       
    

    }
    return (<>
    {filteredList && filteredList.map((listItem) => (
        <div className="indivdual_prodct_card_container" key={listItem.id}>
              <h1 className="product_title title">
                {listItem.name}

            </h1>
          
            <div className="product_img_description">
                <img src={listItem.imageURL} alt="img" />
            
               
                <p className="product_descrptn">{listItem.description}</p>
             
                
             
               
            </div>
            <Button className='buynow_btn' onClick={()=>onSetOfCartItems(listItem)}>Buy Now @ {listItem.price}</Button>
            

        </div>
    ))}
    </>

)}

const mapStateToPros = (state, prop) => {
    return {
      cartItems: state.cartReducer.cart_items,
      currentUser: state.user.currentUser,
    }
}

  const mapDispatchToProps = {
    setCartItems
  }
  

export default withRouter(connect(mapStateToPros, mapDispatchToProps)(EachProduct));