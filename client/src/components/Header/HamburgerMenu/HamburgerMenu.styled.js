import styled from 'styled-components';

export const StyledHamburger = styled.div`
    display: none;

    &:hover{
        cursor: pointer;
    }

    &:focus{
        border: 1px solid ${(props) => props.theme.colors.BLACK};
    }

    @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
        display: block;
        position: absolute;
        right: 23%;
        top: 70%;
        cursor: pointer;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            right: 30%;
        }

        @media(max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
            top: 65%;
            right: 40%;
        }

        @media(max-width: ${(props) => props.theme.breakpoints.SM_MOBILE}) {
            right: 45%;
        }

        & span,
        & span:first-of-type,
        & span:last-of-type {
            text-indent: -9999px;
            cursor: pointer;
            border-radius: 1px;
            height: 2px;
            width: 25px;
            background: ${(props) => props.theme.colors.BLACK};
            position: absolute;
            display: inline-block;
        }

        & span:first-of-type {
            top: -6px; 
        }
        
        & span:last-of-type {
            bottom: -7px;
        }

        & span,
        & span:first-of-type,
        & span:last-of-type {
        -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000); 
        -moz-transition: all 30ms cubic-bezier(0.645, 0.045, 0.355, 1.000); 
            -o-transition: all 30ms cubic-bezier(0.645, 0.045, 0.355, 1.000); 
                transition: all 30ms cubic-bezier(0.645, 0.045, 0.355, 1.000);
        }
        
        &.active span:nth-of-type(2) {
            background-color: transparent;
        }
        &.active span:first-of-type,
        &.active span:last-of-type {
            top: 0;
        }
    
        &.active span:first-of-type {
            transform: rotate(45deg);
        }
        
        &.active span:last-of-type {
            transform: translateY(-10px) rotate(-45deg);
            top: 10px;
        }
    }
`;