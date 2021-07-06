import styled from "styled-components";
import {ShoppingCart} from "@styled-icons/material/ShoppingCart";
import {Cross} from "@styled-icons/entypo/Cross";
import {PlusCircleFill} from "@styled-icons/bootstrap/PlusCircleFill"
import {MinusCircle} from "@styled-icons/boxicons-solid/MinusCircle" 

const StyledCartIcon = styled(ShoppingCart)`
    color: #bf2957;
    width:25px;
`;

const StyledCloseIcon = styled(Cross)`
    width:20px;
`; 

const StyledPlusIcon = styled(PlusCircleFill)`
    width:20px;
    color:#bf2957
`;

const StyledMinusIcon = styled(MinusCircle)`
    width:25px;
    color:#bf2957
`;

export {
    StyledCartIcon,
    StyledCloseIcon,
    StyledPlusIcon,
    StyledMinusIcon
}