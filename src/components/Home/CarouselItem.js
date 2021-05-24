const CarouselItem = ({ item }) => {
  console.log({ item });
  const image = require(`static/${item.bannerImageUrl}`).default;
  return (
    <div>
      <img height="200" src={image} alt={item.bannerImageAlt} loading="lazy" />
    </div>
  );
};

export default CarouselItem;
