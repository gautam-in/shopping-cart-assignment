import styled from "styled-components";
import {ShoppingCart} from "@styled-icons/material/ShoppingCart";
import {Cross} from "@styled-icons/entypo/Cross";
import {PlusCircleFill} from "@styled-icons/bootstrap/PlusCircleFill"
import {MinusCircle} from "@styled-icons/boxicons-solid/MinusCircle" 
import {ChevronDown} from "@styled-icons/boxicons-regular/ChevronDown" 
import {ChevronLeft} from "@styled-icons/boxicons-regular/ChevronLeft" 
import {DotSingle} from "@styled-icons/entypo/DotSingle" 

const StyledCartIcon = styled(ShoppingCart)`
    color: ${({theme:{colors}})=>colors.btnColor};
    width:25px;
`;

const StyledCloseIcon = styled(Cross)`
    width:20px;
`; 

const StyledPlusIcon = styled(PlusCircleFill)`
    width:15px;
    color:${({theme:{colors}})=>colors.btnColor}
`;

const StyledMinusIcon = styled(MinusCircle)`
    width:20px;
    color:${({theme:{colors}})=>colors.btnColor}
`;

const StyledMenuOpenIcon = styled(ChevronDown)`
    width:25px;
    color:${({theme:{colors}})=>colors.white};
`;

const StyledMenuCloseIcon = styled(ChevronLeft)`
    width:25px;
    color:${({theme:{colors}})=>colors.white};
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