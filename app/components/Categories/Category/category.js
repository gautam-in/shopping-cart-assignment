import { useRouter } from 'next/router';
import CustomButton from '../../Shared/CustomButton';
import {
  CategoryContainer,
  ImageConatiner,
  ContentContainer,
} from './category.styles';
import PropTypes from 'prop-types';
import Image from 'next/image';
import withErrorHandler from '../../../ErrorBoundary/withErrorHandler';

const Category = ({ category }) => {
  const { order, imageUrl, name, description, id, key } = category;
  const router = useRouter();
  return (
    <CategoryContainer reverse={order % 2 === 0} order={category.order}>
      <ImageConatiner>
        <Image
          src={imageUrl}
          alt={name}
          layout="responsive"
          width={600}
          height={375}
        />
      </ImageConatiner>
      <ContentContainer>
        <h3>{name}</h3>
        <div>{description}</div>
        <CustomButton
          clickHandler={() => router.push(`/products?category=${id}`)}
          text={`Explore ${key}`}
        ></CustomButton>
      </ContentContainer>
    </CategoryContainer>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};
export default withErrorHandler(Category);
