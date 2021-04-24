import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductsList } from '../../redux/actions'
import ProductCard from './ProductCard'
import styles from './productsList.module.css';

function ProductsList(props) {
   
    useEffect(() => {
        props.fetchProductsList()
    }, [])

    const renderContent = () => {        
        return props.products.map((eachProduct, i) => {
            return <ProductCard product = {eachProduct} key = {i}/>
        })
    }
    return (
        <div className = {styles.productsList}>             
            {renderContent()}
        </div>
    )
}

const mapStateToProps = (state) => {
  return { products : state.products }
}

export default connect(mapStateToProps, {fetchProductsList})(ProductsList)