import styled from "styled-components";
import {ShoppingCart} from "@styled-icons/material/ShoppingCart";
import {Cross} from "@styled-icons/entypo/Cross";
import {PlusCircleFill} from "@styled-icons/bootstrap/PlusCircleFill"
import {MinusCircle} from "@styled-icons/boxicons-solid/MinusCircle" 
import {ChevronDown} from "@styled-icons/boxicons-regular/ChevronDown" 
import {ChevronLeft} from "@styled-icons/boxicons-regular/ChevronLeft" 
import {DotSingle} from "@styled-icons/entypo/DotSingle" 

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

const StyledMenuOpenIcon = styled(ChevronDown)`
    width:25px;
    color:#fff;
`;

const StyledMenuCloseIcon = styled(ChevronLeft)`
    width:25px;
    color:#fff;
`;

const StyledDotSingle = styled(DotSingle)`
    width:25px;
    color:${({color})=>color};
`;

export {
    StyledCartIcon,
    StyledCloseIcon,
    StyledPlusIcon,
    StyledMinusIcon,
    StyledMenuOpenIcon,
    StyledMenuCloseIcon,
    StyledDotSingle
}