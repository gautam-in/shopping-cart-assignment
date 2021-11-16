import { useEffect, useState } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import {
	Menu,
	MenuButton,
	MenuList,
	useMediaQuery,
	Button,
} from '@chakra-ui/react';
import CategoryFilter from './CategoryFilter';
import customRequestHandler from '../../utils/api';

export default function CategoryFilterList() {
	const [isLessThan700px] = useMediaQuery('(max-width: 700px)');
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			customRequestHandler('categories').then((res) => setCategoryList(res));
		};
		fetchData();
	}, []);

	function populateCategoryList(category) {
		return (
			<CategoryFilter id={category.id} key={category.id} name={category.name} />
		);
	}
	if (isLessThan700px) {
		return (
			<Menu>
				<MenuButton
					width="100vw"
					as={Button}
					rightIcon={<BsChevronDoubleDown />}
				>
					Categories
				</MenuButton>
				<MenuList width="100vw">
					{categoryList && categoryList.map(populateCategoryList)}
				</MenuList>
			</Menu>
		);
	}

	return <>{categoryList && categoryList.map(populateCategoryList)}</>;
}
