import { useState } from "react";
import { DropdownList, ListItem, Selection } from "./styles";

const Dropdown = ({ items, handleChange }) => {
	const [selectionItem, setSelectionItem] = useState({
		value: items[0].value || "",
		text: items[0].text || "",
	});
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleClick = (category) => {
		setSelectionItem(category);
		handleChange(category.value);
	};

	return (
		<div>
			<Selection onClick={() => setDropdownOpen(!dropdownOpen)}>
				{selectionItem.text}
				<span>{dropdownOpen ? <>&#708;</> : <>&#709;</>}</span>
			</Selection>
			{dropdownOpen ? (
				<DropdownList>
					{items.map((item) => (
						<ListItem key={item.value} onClick={() => handleClick(item)}>
							{item.text}
						</ListItem>
					))}
				</DropdownList>
			) : null}
		</div>
	);
};

export default Dropdown;
