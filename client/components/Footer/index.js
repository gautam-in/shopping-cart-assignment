import styled from "styled-components"

const FooterWrapper = styled.div`
    height : 4.8rem;
    background-color: #dcdcdc;
    display: flex;
    align-items: center;
    padding: 0 4.8rem;
`

export default function FooterComponent() {
    return (
        <FooterWrapper>
            <h3>Copyright &copy; Sabka Bazaar Grocery Supplies Pvt. Ltd. </h3>
        </FooterWrapper>
    )
}