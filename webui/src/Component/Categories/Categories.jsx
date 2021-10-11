import { useQuery } from "react-query";
import { getCategories } from "../../Services/http";
import css from './Categories.module.css';

function Categories(){
    const {data=[],error,isLoading}=useQuery("getCategories",getCategories);
    return <section>
        {
            data.map(category=><Category key={category.id} category={category}/>)
        }
    </section>
}
export default Categories;

const Category=({category})=>{
    let {name,description,imageUrl,key}=category;
    return <div className={css.Category+" shadowX d-flex flex-row"}>
        <div className={css.Image}><img src={imageUrl} alt={name} /></div>
        <div className={css.Details}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div><button>Explore {key}</button></div>
        </div>
    </div>
}