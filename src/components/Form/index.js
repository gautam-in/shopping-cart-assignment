import React from "react";
import { Container, Base } from "./styled";

export default function Form({ children, ...restProps }) {
    return (
        <Container>
            <Base {...restProps}>{children}</Base>
        </Container>
    );
}
