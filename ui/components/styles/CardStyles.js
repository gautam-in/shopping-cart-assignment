import { Card } from 'react-bootstrap';
import styled from 'styled-components';


const CardStyle = styled(Card)`
    display: flex;
    width: 20rem;
    flex-direction: row;
    height: 20rem;
    /* overflow-y: hidden; */
    .cBody{
        background-color: lightgrey;
        overflow-y: auto;
    }
    .cImage{
            width: 10rem;
        }
    @media (max-width: 800px) {
        width: 20rem;
        .cImage{
            width: 6rem;
        }
    }
    @media (max-width: 500px) {
        width: 16rem;
        height: 15rem;
        .cImage{
            width: 6rem;
        }
    }
`;

export default CardStyle;
