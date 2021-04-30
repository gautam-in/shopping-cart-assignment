import React, { memo } from 'react';
import styled from "styled-components";

const BannerImage = styled.img`
width: 100%;
`;

const Slide = ({ content }) => {
    return (
        <BannerImage src={content} alt="banner image" />
    )
}

export default memo(Slide)