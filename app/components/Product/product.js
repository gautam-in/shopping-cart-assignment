import {ProductStyles,ProductHeader, ProductContent, ImageContainer, ProductDesc, ProductFooter, ProductPrice} from './product.style';
import CustomButton from '../Shared/CustomButton';
import { addToShipping } from '../../../store/actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Product = ({ product, addToShipping }) => {
  return (
    <ProductStyles>
      <ProductHeader>
        <h3>{product.name}</h3>
      </ProductHeader>
      <ProductContent>
        <ImageContainer>
          <img src={product.imageURL} alt={product.name} loading='lazy' />
        </ImageContainer>
        <ProductDesc title={product.description}>
          <p>{product.description}</p>
        </ProductDesc>
        <ProductFooter>
          <ProductPrice>MRP Rs.{product.price}</ProductPrice>
          <CustomButton
            text={`Buy Now`}
            additionalText={` @ Rs ${product.price}`}
            clickHandler={() => addToShipping(product)}
          />
        </ProductFooter>
      </ProductContent>
    </ProductStyles>
  );
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addToShipping: bindActionCreators(addToShipping, dispatch)
  }
}
Product.propTypes = {
  product: PropTypes.object,
  addToShipping: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Product)