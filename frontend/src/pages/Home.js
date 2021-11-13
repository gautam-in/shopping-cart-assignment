import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import categories from '../server/categories/index.get.json';


export default function Home(){
    return(
        <div>
            <Carousel/>
            <div>
            {categories.length > 0 &&
                categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
        </div>
        </div>
    )
}