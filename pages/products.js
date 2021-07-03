import Products from '../components/organism/Products/Products'
import withData from '../lib/withData'

function ProductsIndex(props) {
  return (
    <Products {...props}/>
  )
}

export default withData(ProductsIndex,'products')