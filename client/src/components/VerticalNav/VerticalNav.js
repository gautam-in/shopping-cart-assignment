import { Fragment } from "react";
import Styled from "styled-components";
import PropTypes from 'prop-types';
import P from "../Typography/P";
const VerticalNavContainer = Styled.aside`
  width: 100%;
  background-color: #eee;
`;
const VerticalNavList = Styled.ul`
  height: 100%;
  padding: 0;
  width: 100%;
`;

const VerticalBarNavItem = Styled.li`
  color: ${ props => props.active ? "#ffffff" : "#615f5f"};
  height: 60px;
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: ${ props => props.active ? "#bf2957" : "none"} ;
  padding-left: 0.5rem;
  border-bottom: 1px solid #d2d0d0;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.active ? "" : "#dfdfdf"};
  }
`;

const VerticalNavTitle = Styled.div`
  display: grid;
  place-items: center;
  padding-left: 20px;
`;

const VerticalNav = ({data,handleCategoryClick,selectedCategoryId}) => {
  return (
    <Fragment>
      <VerticalNavContainer>
        <VerticalNavList>
          {data.map((val, i) => (
            <VerticalBarNavItem active={selectedCategoryId === val.id } key={i} onClick={() => handleCategoryClick(val)}>
              <VerticalNavTitle>
                  <P>{val.name}</P>
              </VerticalNavTitle>
            </VerticalBarNavItem>
          ))}
        </VerticalNavList>
      </VerticalNavContainer>
    </Fragment>
  );
};

VerticalNav.propTypes = {
  data: PropTypes.object,
  handleCategoryClick: PropTypes.func,
  selectedCategoryId: PropTypes.string
}

VerticalNav.defaultProps = {
  data: {},
  handleCategoryClick: () => {},
  selectedCategoryId: ''
}


export default VerticalNav;
