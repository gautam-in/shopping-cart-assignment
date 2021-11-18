import styled from "styled-components";


const AsideStyles = styled.main`

display: flex;
height: auto;
align-items: stretch;

aside{
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: var(--light-grey);
    position: absolute;
    /* height: 100%; */
    
    overflow: auto;
    top: 10rem;
    bottom: 0;

    

    button{
        display: block;
        color: #000;
        padding: 16px;
        text-decoration: none;
        width: 100%;
        border: none;
        text-align:left;
        border-bottom: 1px solid var(--medium-grey);

        &:active{
            background-color: var(--primary-color);
        }
    }

    @media screen and (max-width:800px){
        aside{
            width: 100%;
            height: auto;
            position: relative;
        }



    }

    @media screen and (max-width:800px){
        display: none;
    }
}
`

export default AsideStyles