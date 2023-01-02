const SimilarProductImage = ({
  description,
  imageURL,
}: {
  imageURL: string;
  description: string;
}) => {
  return <img alt={description} src={imageURL} className="product-image" />;
};

export default SimilarProductImage;
