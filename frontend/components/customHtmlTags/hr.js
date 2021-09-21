import styled from 'styled-components';

const HrWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    border: 0;
    height: 1px;
    background: #333;
    width: 75%;
    background-image: linear-gradient(to right, #e1e1e1, #e1e1e1, #e1e1e1);
  }
`;

const CustomHr = () => {
  return (
    <HrWrapper>
      <hr />
    </HrWrapper>
  );
};

export default CustomHr;
