import styled from 'styled-components';


export const HomeContainerWrapper = styled.div`

    max-width: 100%;
    display: flex;
    justify-content: center;

    .carousal_arrow {
        align-self: center;
        font-size: 20px;
        padding: 10px;
    }

    .carousal_container{
        width: 60%;
        box-shadow: 0 10px 10px -16px #000000;
        img {
            height: 200px;
            padding: 10px 0px;
        }
    }

    .ant-carousel .slick-list .slick-slide>div>div {
        display: flex !important;
        justify-content: center
    }

    @media (max-width: 768px) {

        .carousal_container{
            width: 100%;

            img {
                width: 100%;
                height: auto;
            }
        }
        .carousal_arrow {
            display: none;
        }
    
    }

`

export const CategoriesWrapper = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .categories_container {
        display: flex;
        justify-content: space-around;
        padding: 30px 0px;
        width:60%;
        box-shadow: 0 10px 10px -16px #000000;

        img {
            width: 40%;
            align-self: center;
        }
    }

    .categories_container:nth-child(even){
        flex-direction: row-reverse;
    } 

    .categories_right_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
    }

    @media (max-width: 768px) {
        .categories_container {
            width: 100%;

            img {
                height: 20%;
                align-self: center;
            }
        }
    }

`