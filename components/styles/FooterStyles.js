import styled from "styled-components"

const FooterStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
left: 50%;
transform: translateX(-50%);
width: 100vw;
max-width: var(--max-width);
height: 3.15rem;
background-color: var(--light-grey);
p{
    padding-bottom: 0;
    margin: auto 0;

}

`

export default FooterStyles