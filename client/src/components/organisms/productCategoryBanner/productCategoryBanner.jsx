import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/button';
import Image from '../../atoms/image/image';
import Card from '../../molecules/card/card';
import './productCategoryBanner.scss';

function ProductCategoryBanner(props) {
  const { categoriesData } = props;
  let navigate = useNavigate();

  const handleOnClickCategory = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      <Card>
        {categoriesData
          ?.filter(({ enabled }) => enabled)
          ?.map(({ name, key, description, imageUrl, id }) => {
            return (
              <div className="productCategoryBanner d-flex justify-content-around p-lg-3 p-md-5 p-4" key={key}>
                <div className="productCategoryBanner__imageContainer">
                  <Image imageSrc={imageUrl} alt={name} />
                </div>
                <div className="productCategoryBanner__content d-flex flex-column align-items-lg-center justify-content-around">
                  <h2 className="productCategoryBanner__title">{name}</h2>
                  <div className="productCategoryBanner__description mb-2">
                    <p>{description}</p>
                  </div>
                  <div className="productCategoryBanner__button">
                    <Button onClick={() => handleOnClickCategory(id)}>{`Explore ${key}`}</Button>
                  </div>
                </div>
              </div>
            );
          })}
      </Card>
    </div>
  );
}

export default ProductCategoryBanner;
