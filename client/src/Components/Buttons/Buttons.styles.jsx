import { Link } from "react-router-dom";
import styled,{css} from "styled-components";

const basicCommon = css`
    text-decoration: none;
    padding: 0.5rem 0.8rem;
    font-size: .9rem;
`;

const colorTexture = css`
    background: rgba(191,41,87,255);
    color: #fff;
`;
export const Button = styled.button`
    ${basicCommon}
    outline:none;
    border :none
`;

export const NormalLink = styled(Link)`
    ${basicCommon}

    &:active,&:hover,&:focus{
        color:#111;
    }
`;

export const AppLink = styled(NormalLink)`
    ${colorTexture}
`;

export const AppButton = styled(Button)`
    ${colorTexture}
`;