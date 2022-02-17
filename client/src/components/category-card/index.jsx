import CustomButton from "../custom-button";
import {
	CategoryImage,
	CategoryItemBlock,
	CategoryDetails,
	Description,
	Name,
} from "./styles";

const CategoryItem = ({ type, name, imageUrl, description }) => {
	const getDetailSection = () => {
		return (
			<CategoryDetails>
				<Name>{name}</Name>
				<Description>{description}</Description>
				<CustomButton>Explore {name}</CustomButton>
			</CategoryDetails>
		);
	};

	return (
		<CategoryItemBlock>
			{type === 1 ? getDetailSection() : null}
			<CategoryImage src={imageUrl} alt={name} />
			{type === 2 ? getDetailSection() : null}
		</CategoryItemBlock>
	);
};

export default CategoryItem;
