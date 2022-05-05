import Styled from "styled-components";
import Tablet from "./Tablet";
import Mobile from "./Mobile";
import Desktop from "./Desktop";


const MobileContainer = Styled.div`
  display: none;
   @media (max-width: 766px){
      display: block;
    }
`;

const TabletContainer = Styled.div`
  display: none;
   @media (min-width: 767px) and (max-width: 1024px){
      display: block;
    }
`;

const DesktopContainer = Styled.div`
  display: none;
   @media (min-width: 1026px){
      display: block;
    }
`;

const Product = ({data}) => {
  return (
    <>
      <DesktopContainer>
        <Desktop data={data} />
      </DesktopContainer>
      <TabletContainer>
        <Tablet data={data} />
      </TabletContainer>
      <MobileContainer>
        <Mobile data={data} />
      </MobileContainer>
    </>
  );
};

export default Product;
