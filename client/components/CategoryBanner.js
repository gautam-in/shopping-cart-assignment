import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const CamgBannerStyle = styled.div `
  display: flex;
  flex-direction: ${props => props.index%2===0 ? 'row' : 'row-reverse'};
  width: 100%;
  min-height: 220px;
  padding: 10px;
  margin: 10px;
  flex-wrap: wrap;
  justify-content:space-between; 

  border-width: 0px;
  border-bottom-width: 5px;

  border-style: solid;
 
  border-image: linear-gradient(
        to right,
       white 0%,
        var(--secondary) 50%,
        white 100%
      ) 1;




img {
  width: 50%;
  height: 200px;
  flex-grow: 0;
}

div {
    width: 50%;
    text-align: center;
}

button {
    background-color: var(--primary);
    border: none;
    color: white;
    padding: 6px;
}

`

export function CategoryBanner({item, index}) {
    return (<CamgBannerStyle index={index}>
              <div>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <button>Explore {item.name}</button>
              </div>
              <img loading="lazy" src={item.imageUrl} alt={item.name} width="100px" height="100px" />
    </CamgBannerStyle>);
}
