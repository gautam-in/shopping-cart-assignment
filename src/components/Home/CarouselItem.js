import { Container } from "./CarouselItem.styles";

const CarouselItem = ({ item }) => {
  const image = require(`static/${item.bannerImageUrl}`).default;
  return (
    <Container>
      <img src={image} alt={item.bannerImageAlt} loading="lazy" />
    </Container>
  );
};

export default CarouselItem;
