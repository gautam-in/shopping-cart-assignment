import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/button/button';
import Card from '../../molecules/card/card';
import Image from '../../atoms/image/image';
import { productsActions } from '../../../pages/products/redux/actions';
import './productCard.scss';
import { toast } from 'react-toastify';
import Toast from '../../atoms/toast/toast';
import { productsSelectors } from '../../../pages/products/redux/selectors';

function ProductCard(props) {
  const { productsData } = props;
  const postcartItem = useSelector(productsSelectors.postCartItemSelectors.selectPostCartItemData);
  let params = useParams();
  const dispatch = useDispatch();

  const handleOnClickBuyProduct = (product) => {
    dispatch(productsActions.cartItemActions.addCartItem(product));
    dispatch(productsActions.postCartItemActions.postCartItemLoading(product));
    toast.success(postcartItem?.responseMessage || 'Product added to cart successfully');

  };

  return (
    <div>
      <Toast />
      <Card>
        {productsData
          ?.filter(({ category }) => category === params.id)
          ?.map((product) => {
            return (
              <div className="productCard" key={product.id}>
                <h3 className="productCard__header">{product.name}</h3>

                <div className="row">
                  <div className="col-6 col-md-6 col-lg-12 mb-2">
                    <Image className="productCard__image" imageSrc={product.imageURL} alt={product.name} />
                  </div>
                  <div className="col-6 col-md-6  col-lg-12">
                    <p className="productCard__description">{product.description}</p>
                    <div className="d-lg-none">
                      <Button onClick={() => handleOnClickBuyProduct(product)}>
                        BUY NOW @ <span> &#8377;</span>
                        {`${product.price}`}
                      </Button>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-flex align-items-center">
                      <div className="productCard__footer d-flex justify-content-between align-items-center">
                        <strong className="mb-0">
                          MRP <span> &#8377;</span>
                          {`${product.price}`}
                        </strong>
                        <div>
                          <Button onClick={() => handleOnClickBuyProduct(product)}>BUY NOW</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Card>
    </div>
  );
}

export default ProductCard;
