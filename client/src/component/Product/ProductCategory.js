import {
	ProductCategoryContainer,
	ProductList,
	ProductListItem,
	ProductItemButton,
	ProductItemText,
	ProductDropdownContainer,
	ProductDropdown,
	ProductDropdownOption,
} from './StyledProduct';

const ProductCategory = (props) => {
	return (
		<>
			<ProductDropdownContainer>
				<ProductDropdown
					onChange={(event) =>
						props.setFilterCatregory(event.target.value)
					}
				>
					<ProductDropdownOption key="all" value="">
						-- Select --
					</ProductDropdownOption>
					{props.categories.map((data) => (
						<ProductDropdownOption key={data.key} value={data.id}>
							{data.name}
						</ProductDropdownOption>
					))}
				</ProductDropdown>
			</ProductDropdownContainer>

			<ProductCategoryContainer>
				<ProductList>
					{props.categories.map((category) =>
						category.enabled ? (
							<ProductListItem
								disablePadding
								divider={true}
								key={category.id}
							>
								<ProductItemButton component="button">
									<ProductItemText
										component="button"
										primary={category.name}
										onClick={() => {
											props.setFilterCatregory(category.id);
										}}
									/>
								</ProductItemButton>
							</ProductListItem>
						) : null
					)}
				</ProductList>
			</ProductCategoryContainer>
		</>
	);
};

export default ProductCategory;
