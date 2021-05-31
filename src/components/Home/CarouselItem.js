import { Container } from "./CarouselItem.styles";
import getImage from "helpers/getImage";

const CarouselItem = ({ item }) => {
  const image = getImage(item.bannerImageUrl);
  return (
    <Container>
      <img src={image} alt={item.bannerImageAlt} loading="lazy" />
    </Container>
  );
};

export default CarouselItem;
