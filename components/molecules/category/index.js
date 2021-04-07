import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import CategoryStyles from "./index.style";

export default function Category({ category ,flexDirection}) {
    const route = useRouter();
    function categoryHandler() {
        route.push({
            pathname: `products/${category.id}`
        })
    }
    return (
        <CategoryStyles flexDirection={flexDirection}>
            <div className="category-img">
                <img src={category.imageUrl} alt={category.name} />
            </div>
            <div className="category-details">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <Button onClick={categoryHandler} size="small" variant="contained" color="secondary"> Explore {category.key}</Button>
            </div>
        </CategoryStyles>
    )
}