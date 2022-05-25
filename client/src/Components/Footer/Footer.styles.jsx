import styled from 'styled-components';

export const FooterComponent = styled.footer`
    background: #efefef;
    font-weight: 400;
    padding: 0 10rem;

    @media only screen and (max-width: 600px) {
        padding: 0 1rem;
    }

    @media only screen and (min-width: 600px) {
        padding: 0 6rem;
    }
    
    @media only screen and (min-width: 768px) {
        padding: 0 8rem;
    }
`;

export const FooterCopyrightContainer = styled.div`
    padding: 1rem;
`;

export const FooterCopyright = styled.p`
    margin :0;
`;

