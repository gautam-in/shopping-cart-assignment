import CustomButton from "../custom-button";
import {
	CategoryImage,
	CategoryItemBlock,
	CategoryDetails,
	Description,
	Name,
	CategoryImageBlock,
	Explore,
} from "./styles";

const CategoryItem = ({ type, name, imageUrl, description }) => {
	const getDetailSection = () => {
		return (
			<CategoryDetails>
				<Name>{name}</Name>
				<Description>{description}</Description>
				<CustomButton>
					<Explore>Explore {name}</Explore>
				</CustomButton>
			</CategoryDetails>
		);
	};

	return (
		<CategoryItemBlock>
			{type === 1 ? getDetailSection() : null}
			<CategoryImageBlock>
				<CategoryImage src={imageUrl} alt={name} />
			</CategoryImageBlock>
			{type === 2 ? getDetailSection() : null}
		</CategoryItemBlock>
	);
};

export default CategoryItem;
