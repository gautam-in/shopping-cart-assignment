import Button from '@material-ui/core/Button';
import kiwi from '../../assets/images/products/fruit-n-veg/kiwi-green.jpg'
import './productItem.scss'
const ProductItem=({item})=>{
    return <div className='product-item d-flex flex-column'>
        <h1 className='heading'>{item?.name} </h1>
        <img src={item.imageURL} alt="kiwi" width='220' />
        <span className='des'>{item?.description}</span>
  <div className='d-flex flex-row justify-content-between'><span>MRP Rs.{item.price}</span>       <Button className='buy-button' variant="contained">Buy Now</Button>
</div>
    </div>
}
export default ProductItem;