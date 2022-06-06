import { useNavigate } from 'react-router-dom';

import {
	CategoryContainer,
	CategoryImgContainer,
	CategoryImg,
	CategoryDataContainer,
	CategoryData,
	CategoryHeading,
	CategoryDesc,
	ExploreButton,
} from './StyledHome';

const CategoryItem = ({ item }) => {
	let navigate = useNavigate();

	const handleProduct = () => {
		navigate(`product/${item.id}`, { replace: true });
	};

	return (
		<CategoryContainer>
			<CategoryImgContainer>
				<CategoryImg src={item.imageUrl} alt={item.key} width="80%" />
			</CategoryImgContainer>
			<CategoryDataContainer>
				<CategoryData component="div">
					<CategoryHeading>{item.name}</CategoryHeading>
					<CategoryDesc>{item.description}</CategoryDesc>
					<ExploreButton onClick={handleProduct}>
						{'Explore ' + item.key}
					</ExploreButton>
				</CategoryData>
			</CategoryDataContainer>
		</CategoryContainer>
	);
};

export default CategoryItem;
