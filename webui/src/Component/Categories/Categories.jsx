import { Link } from "react-router-dom";
import { useCategory } from "../../Hooks/hooks";
import Button from "../Button/Button";
import css from './Categories.module.css';

function Categories(){
    let {data,error,isLoading}=useCategory();
    return <section>
        {error && <p>{error.message}</p>}
        {
            data.map((category,ix)=><Category key={category.id} category={category} ix={ix+1}/>)
        }
    </section>
}
export default Categories;

const Category=({category,ix})=>{
    let {name,description,imageUrl,key}=category;
    return <div className={css.Category+" shadowX d-flex flex-row "+(ix%2===0?' flex-row-reverse':'')}>
                <div className={css.Image}><img src={imageUrl} alt={name} /></div>
                <div className={css.Details}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div><Link to={`/products/${key}`}><Button>Explore {key} </Button></Link></div>
                </div>
            </div>
}