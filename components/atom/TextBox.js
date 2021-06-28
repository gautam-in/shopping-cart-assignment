import styled from 'styled-components';

const StyledBox = styled.div`
    input {
        font-size:12px;
        padding:10px 10px 10px 5px;
        display:block;
        border:none;
        border-bottom:1px solid #757575;
        :focus{
            outline:none;
        }
    }
`;

const TextBox = ({name,value,type})=>{
    return (
        <StyledBox>
        <input
            type={type}
            name={name}
            value={value}
        />
        </StyledBox>
    )
}

export {TextBox}