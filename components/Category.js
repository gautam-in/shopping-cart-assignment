import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import CategoryStyles from "../styles/category";


export default function Category({category}) {
    const route = useRouter();
    function categoryHandler(){
        route.push({
            pathname:`products/${category.id}`
        })
    }
    return (
        <CategoryStyles>
            <div className="category-img">
                <img src={category.imageUrl} alt={category.name}/>
            </div>
            <div className="category-details">
                <h5>{category.name}</h5>                
                <p>{category.description}</p>
                <Button onClick={categoryHandler} size="small" variant="contained" color="secondary"> Explore {category.key}</Button>
            </div>
        </CategoryStyles>
    )
}