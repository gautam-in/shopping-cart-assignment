import styled from "styled-components";
import verticalSeparator from '../../assets/images/vert-seperator.png'
export const ProductSection = styled.div`
    padding: 25px;
    background:url(${verticalSeparator}) no-repeat right;
    background-size: 16px 100%;
    border-bottom:3px dashed #efefef;
    h3{
        font-size: 20px;
        font-weight: bold;
        min-height: 72px;
        text-align:left;
    }
    img{
        width:100%;
        height:199px;
        min-height: 199px;
        object-fit: contain;
        @media screen and (max-width:576px){
            flex: 1 0 50%;
        }
    }
    .description {
        margin-top: 20px;
        overflow: hidden;
        position: relative;
        line-height: 1.4em;
        max-height: 7.5em;
        text-align: left;
        padding: 4px 10px;
        background: #f0f0f0;
        // word-break: break-all;
    }
    // .description:before {
    //     content: '...';
    //     position: absolute;
    //     right: 10px;
    //     bottom: 6px;
    //     width: 13px;
    //     background: #f0f0f0;
    //     text-align: right;
    //     // z-index: 1;
    //     font-size: 20px;
    // }
    // .description:after {
    //     content: '';
    //     position: absolute;
    //     right: 0;
    //     width: 1em;
    //     height: 1em;
    //     margin-top: 0.2em;
    //     background: #f0f0f0;
    // }
    .price-action{
        span{
            align-self:center;
        }
    }

    .mob-prod-details{
        @media screen and (max-width:576px){
            display:flex;
            .buy-now{
                max-width: unset;
                width: 100%;
            }
        }
    }
`
export const ButtonPink = styled.button`{
    background: #bf2957;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    padding: 7px 20px;
    cursor:pointer;
    max-width:220px;
}`