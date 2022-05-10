import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import Styled from "styled-components";
import { filterDropDownData } from "../../utils";

const Dropdown = Styled.div`
  padding-bottom: 6px;
  width: 100%;
  position: relative;
`;

const DropdownSelection = Styled.div`
  background-color: #bf2957;
  border-radius: 2px;
  padding: 16px 16px;
  cursor: pointer;
  width: 100%;
  position: relative;
  color: #ffffff;
  &:after { 
    display: block;
    content: "";
    width: 12px;
    height: 12px;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    transform: ${(props) =>
      props.visible ? "rotate(-135deg)" : "rotate(45deg)"};
    position: absolute;
    right: 15px;
    top: ${(props) => (props.visible ? "20px" : "18px")};
    transition: transform 0.3s linear, -webkit-transform 0.3s linear;
  }
`;

const DropdownItems = Styled.div`
    background-color: #f9f9f9;
    border-radius: 2px;
    position: absolute;
    top: 100%;
    width: 100%;
    animation: 0s linear 2.3s forwards delayedShow;
    z-index: 8;
    color: black;
`;

const DropdownItem = Styled.div`
  padding: 16px 16px;
  cursor: pointer;
  border-bottom: 0.5px solid #ccc;

  &:hover {
    background-color: #0001;
  }
`;


const DropdownComponent = ({ data,selectedCategoryId,handleCategoryClick }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  return (
    <Fragment>
      <Dropdown>
        <DropdownSelection
          visible={isDropDownVisible}
          onClick={() => {
            setIsDropDownVisible(!isDropDownVisible);
          }}
        >
          {selectedCategoryId !== ''
            ? filterDropDownData(data,selectedCategoryId)
            : "Please select an item"}
        </DropdownSelection>
        {isDropDownVisible && (
          <DropdownItems>
            { data && data.map((item, index) => (
              <DropdownItem
                key={`${item.value}-${index}`}
                onClick={() => {
                  handleCategoryClick(item);
                  setIsDropDownVisible(false);
                }}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownItems>
        )}
      </Dropdown>
    </Fragment>
  );
};


DropdownComponent.propTypes = {
  data: PropTypes.array,
  handleCategoryClick: PropTypes.func,
  selectedCategoryId: PropTypes.string,
}

DropdownComponent.defaultProps = {
  data: {},
  handleCategoryClick: () => {},
  selectedCategoryId: '',
}
export default DropdownComponent;
