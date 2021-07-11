import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const HomeItemStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 6px -6px #bbbbbb;
  margin-top: 2%;
  padding: 2%;
  img {
    height: 10rem;
    width: 15rem;
  }
  .ItemText {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h4 {
      margin: 0;
    }
    div {
      font-size: 10px;
    }
  }
  button {
    width: auto;
    margin: 1rem;
  }
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
`;
export default function HomeItem({ item }) {
  const history = useHistory();
  return (
    <HomeItemStyles className='HomeItem'>
      <img key={item.id} src={`..${item.imageUrl}`} alt={item.name} />
      <div className='ItemText'>
        <h4>{item.name}</h4>
        <div>{item.description}</div>
        <button
          type='submit'
          onClick={() => history.push('/products', item.name)}>
          Explore {item.key}
        </button>
      </div>
    </HomeItemStyles>
  );
}
