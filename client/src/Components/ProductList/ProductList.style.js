import styled from "styled-components";

export const ProductListWrapper = styled.div`
    max-width: 100%;
    display: flex;
    min-height: 100vh;
    justify-content: center;

    .product_container {
        width: 78%;
        display: flex;

        .product_list {
            width: 75%;
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
            height: fit-content;
        }
        .product_list_item {
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(25% - 10px);
            min-height: 250px;
            padding: 5px;
            margin-left: 10px;
            margin-top: 30px;
            cursor: pointer;
            box-shadow: 0px 9px 8px rgb(0 0 4 / 3%);

            p{
                background-color: #f0f0f0;
                padding: 5px 10px;
                font-size: 12px;
                height: 75px;
                line-height: 15px;
            }
        }
        .price_tag {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 10px;
        }

        .price_tag button {
            background: #be2857;
            color: white;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        .product_container {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .product_list {
            width: 100% !important;
            padding: 20px;
        }

        .product_list_item_mobile {
            border-bottom: 1px dotted #999999;
            margin-top: 20px;
        }

        .product_desc_price_mobile {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p {
                background-color: #f0f0f0;
                padding: 5px 10px;
                font-size: 12px;
                height: 75px;
                line-height: 15px;
            }
        }

        .product_desc_price_mobile button{
            background: #be2857;
            color: white;
            cursor: pointer;
        }
        .product_img_desc_container_mobile {
            display:flex;
            img {
                width: 50%;
            }
        }
    }

    @media (max-width: 1200px) {
        .product_list_item {
            width: calc(50% - 10px) !important;
        }
    }
`