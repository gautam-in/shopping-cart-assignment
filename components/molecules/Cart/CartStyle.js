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
    background-color: #eeeeee;
    display:flex;
    justify-content: center;
    text-align: center;
    /* margin-top:40px; */
    padding:3px;
    cursor:pointer;
`;

const Count = styled.span`
    font-family: "Rockwell Regular";
    /* padding-top:15px; */
    /* padding-left:10px; */
    padding-right:10px;
`;

const CartExpand = styled.div`
    z-index:999;
    background:#f0f0f0;
    width:300px;
    height:520px; 
    margin-left:auto;
    position:absolute;
    right:0;
    top:92px;
    display:${(props) => (props.active==-1 ? "none" : "flex")};
    flex-direction: column;
    animation: ${(props)=>(props.active ? slideInLeft : slideOutLeft  )} 0.4s forwards;
    /* animation-name: ${rotate};
    animation-duration: 10s;
    animation-iteration-count: 1; */
`;

const CartContainer = styled.div`
    display:flex;
    flex-flow:column wrap;
    flex-basis:100%;
    justify-content:flex-start;
`;

const CartExpandTop = styled.div`
    flex-basis:10%;
    background:black;
    display:flex;
    justify-content: space-between;
    color:#fff;
    padding:10px;
    div{
        display:flex;
        span{
            font-size:12px;
            padding:3px;
        }
    }
`;

const CartExpandMiddle = styled.div`
    flex-basis:75%;
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
    CartOverlayStyled
}