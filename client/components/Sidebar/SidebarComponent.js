import Link from 'next/link';
import { SidebarContainer, SidebarCategoriesList, CategoryItem, StyledLink } from "../styles/Sidebar"
import { useSelector } from 'react-redux';

export default function SidebarComponent () {
    const categories = useSelector(state => state.category.allCategories);
    return (
        <SidebarContainer>
            <SidebarCategoriesList>
                { categories.length > 0 ?
                    categories.map(category => <CategoryItem key={category.key}>
                            <Link href={"/products/" + category.key + '/' + category.id} passHref><StyledLink>{category.name}</StyledLink></Link>
                        </CategoryItem>
                    )
                 : <h3>No Categories Found!</h3>}
            </SidebarCategoriesList>
        </SidebarContainer>
    )
}   