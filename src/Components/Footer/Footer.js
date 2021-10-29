import styled from "styled-components"

const FOOTER_STYLE = styled.footer`
        background: #eaeaea;
        height: 45px;
        margin-bottom: 0px;
        text-align: center;
        display: grid;
        justify-items: center;
`

export default function Footer(){
    return (
        <FOOTER_STYLE><p>Copyright @ 2011-2021 Sabka Bazaar Grocery Supplies Pvt. ltd</p></FOOTER_STYLE>
    )
}