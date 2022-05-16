import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Styled from "styled-components";
import VerticalNav from "../../components/VerticalNav/VerticalNav";
import Dropdown from "../../components/Dropdown/Dropdown";

const SidebarContainer = Styled.div`
   @media (max-width: 766px){
      display: none;
    }
    @media (min-width: 767px){
      display: block;
    }
`;

const DropdownContainer = Styled.div`
   @media (max-width: 766px){
      display: block;
    }
    @media (min-width: 767px){
      display: none;
    }
`;

const SidebarContainerComponent = ({...rest}) => {
  return (
    <Fragment>
      <SidebarContainer>
        <VerticalNav {...rest}/>
      </SidebarContainer>
     <DropdownContainer>
        <Dropdown {...rest}/>
      </DropdownContainer> 
    </Fragment>
  );
};

SidebarContainerComponent.propTypes = {
  rest: PropTypes.object
}

SidebarContainerComponent.defaultProps = {
  rest: {}
}


export default SidebarContainerComponent;
