import {CategoryContainer,CategoryImgContainer,
    CategoryImg,CategoryMetaDataContainer,CategoryMetaData,
    CategoryMetaHeading,CategoryMetaDesc} from './Category.styles';
import { AppLink } from '../Buttons/Buttons.styles';

const Category = props => {
    return(
        <CategoryContainer>
            <CategoryImgContainer>
                <CategoryImg src={props.data.imageUrl} alt="" />
            </CategoryImgContainer>

            <CategoryMetaDataContainer>
            <CategoryMetaData>
                <CategoryMetaHeading>{props.data.name}</CategoryMetaHeading>
                <CategoryMetaDesc>{props.data.description}</CategoryMetaDesc>
                <AppLink to='/'>Explore {props.data.key}</AppLink>
            </CategoryMetaData>
            </CategoryMetaDataContainer>
        </CategoryContainer>

    )
}

export default Category;