import { useRouter } from 'next/router';
import CustomButton from '../../Shared/CustomButton';
import {CategoryContainer, ImageConatiner, ContentContainer} from './category.styles';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Category({ category }) {
  const router = useRouter();
  return (
    <CategoryContainer
      reverse={category.order % 2 === 0}
      order={category.order}
    >
      <ImageConatiner>
        <Image
          src={category.imageUrl}
          alt={category.name}
          layout="responsive"
          width={600}
          height={375}
        />
      </ImageConatiner>
      <ContentContainer>
        <h3>{category.name}</h3>
        <div>{category.description}</div>
        <CustomButton
          clickHandler={() => router.push(`/products?category=${category.id}`)}
          text={`Explore ${category.key}`}
        ></CustomButton>
      </ContentContainer>
    </CategoryContainer>
  );
}

Category.propTypes = {
  category: PropTypes.any,
};