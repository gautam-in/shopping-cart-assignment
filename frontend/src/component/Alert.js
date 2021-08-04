import React from 'react';
import styled from 'styled-components';

const AlertStyles = styled.div`
  position: fixed;
  top: 2%;
  left: 15%;
  width: 70%;
  color: #d8000c;
  background-color: #ffbaba;
  z-index: 100;
  span {
    padding: 0 0.5rem;
    font-weight: 600;
  }
  .alert-Success {
    color: #270;
    background-color: #dff2bf;
    padding: 1%;
  }
  @media only screen and (min-width: 600px) {
    left: 35%;
    width: 40%;
  }
  @media only screen and (min-width: 992px) {
    left: 40%;
    width: 25%;
  }
`;

export default function Alert({ type, message }) {
  return (
    <AlertStyles>
      <div className={`alert-${type}`}>
        {type === 'Success' ? <span>&#9432;</span> : <span cla>&#9432;</span>}
        {message}
      </div>
    </AlertStyles>
  );
}
