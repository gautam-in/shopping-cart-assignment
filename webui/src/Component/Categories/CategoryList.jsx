import { Link } from "react-router-dom";
import { useCategory } from "../../Hooks/hooks";
import css from './Categories.module.css';

function CategoryList(){
    let {catIdSelected,data,error,isLoading}=useCategory();
    return <>
        {isLoading && <p>Loading category data..</p>}
        {error && <p>{error.message}</p>}
        <ul className={css.CategoryList}>
        {
            data.map(category=><li key={category.id} className={catIdSelected===category.id?css.Active:''}><Link to={`/products/${category.key}`}>{category.name}</Link></li>)
        }
        </ul>
    </>
}
export default CategoryList;