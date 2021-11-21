import styled from "styled-components"
const ErrorWrapper = styled.div`
    height: 4.8rem;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SuccessWrapper = styled.div`
    height: 4.8rem;
    background-color: greenyellow;
    display: flex;
    justify-content: center;
    align-items: center;
`

export function ErrorMessage(props) {
    return (
        <ErrorWrapper>
             { props.children }
        </ErrorWrapper>
    )
}


export function SuccessMessage(props) {
    return (
        <SuccessWrapper>
             { props.children }
        </SuccessWrapper>
    )
}