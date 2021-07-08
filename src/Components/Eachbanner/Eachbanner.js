import React from "react";
import styled from "styled-components";
import "./Eachbanner.scss";
function Eachbanner({ data }) {
  const Wrapper = styled.div`
    background-image: url(${data.bannerImageUrl});
    background-repeat: no-repeat;
    height: 350px;
    background-size: cover;
  `;
  return (
    <div>
      <Wrapper />
    </div>
  );
}

export default Eachbanner;
