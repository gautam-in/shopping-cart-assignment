import styled from 'styled-components';
import {Button} from '../atom/Button';
import Image from 'next/image';
import {TextBox} from '../atom/TextBox';

const CategoryBoxStyled = styled.div`
        width:100%;
        box-shadow: 0 4px 8px -8px black;
        margin-bottom:20px;
        align-items: center;
        display:flex;
        padding: 12px 10px 24px 10px;
        /* justify-content: space-between; */
`; 

const BoxImage = styled.div`
    width:50%;
    img{
        width:300px;
        height:auto;
    }
`;

const InfoBox = styled.div`
    width:50%;
    text-align: center;
`;
 
function CategoryBox({data}){

    if(!data.enabled)
        return '' 
    return (
        <CategoryBoxStyled>
            <BoxImage>
<TextBox type="text" value="ankur" name="name"/>
                { data?.imageUrl?.length > 0 && (<Image src={data.imageUrl} alt={data.name} width="150" height="100"/>) }
            </BoxImage>
            
            <InfoBox>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <Button>{`Explore ${data.key}`}</Button>
            </InfoBox>
        </CategoryBoxStyled>
    );
}

export {CategoryBox}