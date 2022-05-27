import styled from 'styled-components';

export const HeaderWrapper = styled.div`

        top: 0px;
        position: sticky;
        left: 0px;
        width: 100%;
        height: 88px;
        background: white;
        z-index: 100;

    .header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        box-shadow: rgb(204 204 204) 0px 0px 5px 1px;
        img {
            width: 150px;
        }

        a{
            color: black;
        }
    }

    .header_navigate {
        display: flex;
        justify-content: space-around;
        width: 15%;
    }

    .header_right_container {
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .header_right_auth {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
    }

    /* Extra small devices (phones, 624px and down) */
    @media (max-width: 624px) {
        height: 90px;
        .header {
            height: 70px;

            img{
                width: 100px;
            }
        }
        .header_navigate {
            display: none;
        }
        .header_right_auth {
            display: none;
        }
    }
`