const ProductImage = ({
  description,
  imageURL,
  alt,
}: {
  imageURL: string
  description: string
  alt: string
}) => {
  return (
    <img
      alt={alt}
      title={description}
      src={imageURL}
      className="product-image"
    />
  )
}

export default ProductImage
