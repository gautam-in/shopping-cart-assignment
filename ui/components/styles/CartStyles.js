import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const ButtonStyle = styled.div`
    cursor: pointer;
    width: 50px;
`;
export const CartStyle = styled(Modal)`
    .modalBody{
        height: 680px;
        font-size: 15px;
        background-color: lightgrey;
        overflow-y: auto;
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
            /* display: grid;
            justify-content:center;
            text-align: center;
            padding-top: 50%; */
        }
        .modalfoot{
            font-size: 12px;
        }
    }
`;