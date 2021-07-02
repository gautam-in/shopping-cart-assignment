import {ProductStyles,ProductHeader, ProductContent, ImageContainer, ProductDesc, ProductFooter, ProductPrice} from './product.style';
import CustomButton from '../Shared/CustomButton';
import { addToShipping } from '../../../store/actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withErrorHandler from '../../ErrorBoundary/withErrorHandler';

const Product = ({ product, addToShipping }) => {
  const {name, imageURL, description, price} = product
  return (
    <ProductStyles>
      <ProductHeader>
        <h3>{name}</h3>
      </ProductHeader>
      <ProductContent>
        <ImageContainer>
          <img src={imageURL} alt={name} loading='lazy' />
        </ImageContainer>
        <ProductDesc title={description}>
          <p>{description}</p>
        </ProductDesc>
        <ProductFooter>
          <ProductPrice>MRP Rs.{price}</ProductPrice>
          <CustomButton
            text={`Buy Now`}
            additionalText={` @ Rs ${price}`}
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

export default withErrorHandler(connect(null, mapDispatchToProps)(Product))