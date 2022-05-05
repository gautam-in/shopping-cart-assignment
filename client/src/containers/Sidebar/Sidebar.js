import Styled from "styled-components";
import VerticalNav from "../../components/VerticalNav/VerticalNav";
import Dropdown from "../../components/Dropdown/Dropdown";

const SidebarContainer = Styled.div`
   @media (max-width: 480px){
      display: none;
    }
    @media (min-width: 481px){
      display: block;
    }
`;

const DropdownContainer = Styled.div`
   @media (max-width: 480px){
      display: block;
    }
    @media (min-width: 481px){
      display: none;
    }
`;

const SidebarContainerComponent = ({data}) => {
  return (
    <>
      <SidebarContainer>
        <VerticalNav data={data}/>
      </SidebarContainer>
      <DropdownContainer>
        <Dropdown data={data}/>
      </DropdownContainer>
    </>
  );
};

export default SidebarContainerComponent;
