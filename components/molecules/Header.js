import styled from 'styled-components'
import { Nav } from './Nav';
import CartBox from './CartBox';

const HeaderStyle = styled.div`
    display:flex;
    justify-content: center;
    padding-left:13vw;
    padding-right:13vw;
    box-shadow: 0 4px 6px -6px #777;
`;

export default function Header(){
    return (
        <HeaderStyle>
            <Nav />
            <CartBox />    
        </HeaderStyle>
    )
}