import React from 'react';
import PropTypes from 'prop-types';
 
import styled from "styled-components";

const ButtonStyle = styled.button`
    background:#bf2957;
    font-family:'Myriad Pro Regular';
    color:#fff;
    border:none;
    text-align: center;
    width:auto;
    height:30px;
`; 

const Button= (props) => {
  const { children,type, cname } = props;
  return (
        <ButtonStyle className={cname} type={type}>{children}</ButtonStyle>
  );
};

/*Button.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cname: PropTypes.string.isRequired,
};*/

export default Button;