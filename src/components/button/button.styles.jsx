import styled from 'styled-components';
import devices from '../media/devices';

export const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  margin: 2%;
  border-radius: 5px;
  font-size: 15px;
  background-color: #8d0975;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media ${devices.mobile} {
    font-size: 8px;
    margin: 0;
    padding: 0;
  }
`;