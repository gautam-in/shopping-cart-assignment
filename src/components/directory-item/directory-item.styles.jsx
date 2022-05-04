import styled from 'styled-components';


export const DirectoryItemContainer = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  overflow: hidden;
  background-color: white;
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  order: ${({ order }) => order};
`;

export const Body = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  order: ${({ order }) => order};

  h2 {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-weight: lighter;
    font-size: 12px;
  }
`;