import styled from "styled-components"

const LOGO_STYLED = styled.img`
    width: 135px;
    height: 60px;
    padding-left: 8px;
`

export default function Logo(){
    return(
        <LOGO_STYLED src='static/images/logo.png' alt='logo'/> 
    )
}