import Link from 'next/link';

import {
  TitleWrapper,
  DescriptionWrapper,
  DescriptionContent,
  BannerWrapper,
  ImageWrapper,
} from 'styles/banners.styled';

const DescriptionComponent = ({ name, description, keyMeta, id }) => {
  return (
    <DescriptionWrapper>
      <TitleWrapper>{name}</TitleWrapper>
      <DescriptionContent>{description}</DescriptionContent>
      <Link href={`/products?categoryId=${id}`}>{'Explore ' + keyMeta}</Link>
    </DescriptionWrapper>
  );
};

const ImageContent = ({ imageUrl, keyMeta }) => {
  return (
    <ImageWrapper
      src={imageUrl}
      alt={keyMeta}
      className="banner__category__image"
    />
  );
};

const Banner = (props) => {
  const { index } = props;

  let leftComponent, rightComponent;

  if (index % 2 === 0) {
    leftComponent = ImageContent;
    rightComponent = DescriptionComponent;
  } else {
    leftComponent = DescriptionComponent;
    rightComponent = ImageContent;
  }

  const componentParts = {
    leftComponent,
    rightComponent,
    grid: index % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
  };

  return (
    <BannerWrapper grid={componentParts.grid}>
      <componentParts.leftComponent {...props} />
      <componentParts.rightComponent {...props} />
    </BannerWrapper>
  );
};

export default Banner;
