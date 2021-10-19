import { Card } from 'react-bootstrap';
import styled from 'styled-components';


const CardStyle = styled(Card)`
    display: flex;
    width: 21rem;
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
    @media (max-width: 900px) {
        width: 30rem;
        .cImage{
            width: 15rem;
        }
    }
    @media (max-width: 500px) {
        width: 20rem;
        height: 15rem;
        .cImage{
            width: 10rem;
        }
    }
`;

export default CardStyle;
