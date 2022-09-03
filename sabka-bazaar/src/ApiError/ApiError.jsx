import styled from "styled-components";
import PropTypes from "prop-types";
export const ApiError = ({ errorMessage }) => {
  return <StyledDiv>{errorMessage}</StyledDiv>;
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

ApiError.propTypes = {
  errorMessage: PropTypes.string,
};
