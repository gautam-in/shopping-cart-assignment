import styled from 'styled-components'

const NavStyled = styled.div`
    display: flex;
    flex-direction:row;
`;

const ListStyled = styled.ul`
    padding-left: 20px;
    padding-right:20px;
    display:flex;
    li{
        list-style: none;
        padding-top:10px;
        margin-top:25px;
    }
  `;

export {
    NavStyled,
    ListStyled
}