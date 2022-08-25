import PropTypes from "prop-types";
export const FormInfo = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>{description}</div>
    </>
  );
};
FormInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
