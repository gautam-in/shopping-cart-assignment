import './CategoryItem.scss';
import {Link} from 'react-router-dom';


const CategoryItem = props => {
    return(
        <div className='categoryWrapper'>
            <div className='categoryWrapper_Img'>
                <img src={props.data.imageUrl} alt="" />
            </div>

            <div className='categoryWrapper_Body'>
            <div>
                <h3 className='categoryWrapper_Body_Header'>{props.data.name}</h3>
                <p className='categoryWrapper_Body_Desc'> {props.data.description}</p>
                <Link className='buttonLink' to={`/Products/categoryId/${props.data.id}`}>Explore {props.data.key}</Link>
            </div>
            </div>
        </div>

    )
}

export default CategoryItem;