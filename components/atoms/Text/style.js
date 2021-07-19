import styled from 'styled-components'

const StyledP = styled.p`
    display:flex;
    flex-wrap:wrap;
    font-family:${({theme,paraTheme})=>theme.paragraph[paraTheme].fonts};
    background:${({theme,paraTheme})=>theme.paragraph[paraTheme].color};
    padding:${({theme,paraTheme})=>theme.paragraph[paraTheme].padding};
    font-size:${({theme,paraTheme})=>theme.paragraph[paraTheme].fontSize};
    font-weight:${({theme,paraTheme})=>theme.paragraph[paraTheme].fontWeight};
`;

export default StyledP