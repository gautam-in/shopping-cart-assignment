import styled,{keyframes} from 'styled-components'

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    display:flex;
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -120%, 0);
    transform: translate3d(0,-120%, 0);
    display:flex;
  }
`;


const Container = styled.div`
    background-color: ${({theme:{cart}})=>cart.desktop.backgroundColor};
    display:flex;
    justify-content: center;
    text-align: center;
    padding:3px;
    cursor:pointer;
`;

const Count = styled.span`
    font-family: ${({theme:{themeFont}})=>themeFont.family};
    padding-right:10px;
`;

const CartExpand = styled.div`
    z-index:999;
    background:${({theme:{colors}})=>colors.gray};
    width:300px;
    height:520px; 
    margin-left:auto;
    position:absolute;
    right:0;
    top:92px;
    display:${(props) => (props.active==-1 ? "none" : "flex")};
    flex-direction: column;
    animation: ${(props)=>(props.active ? slideInLeft : slideOutLeft  )} 0.4s forwards;
    
    @media(max-width: 768px) {
      width: 100vw;
      height:95vh;
    }

    @media(max-width: 480px) {
      width: 100vw;
      height:100vh;
    }
`;

const CartContainer = styled.div`
    display:flex;
    flex-flow:column wrap;
    flex-basis:100%;
    justify-content:flex-start;
`;

const CartExpandTop = styled.div`
    flex-basis:10%;
    background:${({theme:{colors}})=>colors.black};
    display:flex;
    justify-content: space-between;
    color:${({theme:{colors}})=>colors.white};
    padding:10px;
    @media(max-width: 768px) {
      display:flex;
      justify-content: space-between;
      flex-basis:5%;
      margin-top:24px;
      background:${({theme:{colors}})=>colors.white};
      color:${({theme:{colors}})=>colors.black};
    }
`;

const CartHeading = styled.div`
    display:flex;
    font-family: ${({theme:{themeFont}})=>themeFont.family};
    font-weight: 400;
   
`;

const CartClose = styled.div`

`;

const HeadingText = styled.span`
    font-size:16px;
    padding:4px;
    @media(max-width: 768px) {
      font-weight: 800;
      font-size:18px;
      padding:4px;
    }
`;

const ItemCount = styled.span`
  font-family: ${({theme:{themeFont}})=>themeFont.family};
  padding:4px;
  @media(max-width: 768px) {
      padding-top:8px;
      font-size:14px;
    }
`;

const CartExpandMiddle = styled.div`
    flex-basis:75%;
    @media(max-width: 768px) {
      flex-basis:80%;
    }
`;

const CartExpandBottom = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:10%;
`; 

const CartOverlayStyled = styled.div`
  position: fixed;
  display: ${({open})=>open == 1 ? 'block':'none'};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
`


export {
    Container,
    Count,
    CartExpand,
    CartContainer,
    CartExpandTop,
    CartExpandMiddle,
    CartExpandBottom,
    CartOverlayStyled,
    CartHeading,
    CartClose,
    HeadingText,
    ItemCount
}