import { CategoryItemContainer, ImageContainer, CategoryDesc } from "../../styles/Category/CategoryItem"
import Link from "next/link"

export default function CategoryItem({category}) {
    return (
         <Link href={"/products/" + category.key + '/' + category.id}>
            <CategoryItemContainer>
                <ImageContainer>
                    <img src={category.imageUrl} alt={category.name} />
                </ImageContainer>
                <CategoryDesc>
                    <h1>{category.name}</h1>
                    <p>{category.description}</p>
                    <button>Explore {category.name}</button>
                </CategoryDesc>
            </CategoryItemContainer>
        </Link> 
    )
}