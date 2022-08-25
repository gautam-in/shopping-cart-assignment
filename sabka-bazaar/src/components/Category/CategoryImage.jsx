import PropTypes from "prop-types";

export const CategoryImage = ({ name, imageUrl, evenIndex }) => {
  const alignImgClass = evenIndex ? "align-img-left" : "align-img-right";
  return (
    <div className={`category-img-container ${alignImgClass}`}>
      <img src={imageUrl} alt={name} className="category-img" />
    </div>
  );
};

CategoryImage.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  evenIndex: PropTypes.bool,
};
