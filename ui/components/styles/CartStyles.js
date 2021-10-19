import { Modal } from 'react-bootstrap';
import styled from 'styled-components';


const CartStyle = styled(Modal)`
    .modalBody{
        height: 680px;
        font-size: 15px;
        background-color: lightgrey;
    }
    .modalfoot{
        font-size: 18px;
    }
    .modal-header{
        background-color: black;
        color: white;
    }
    @media (max-width: 600px) {
        .modalBody{
            height: 450px;
            width: 100%;
            font-size: 10px;
        }
        .modalfoot{
            font-size: 12px;
        }
    }
`;

export default CartStyle;