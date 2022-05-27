import './category-item.scss';
import Button from '../button';
import { Link } from 'react-router-dom';
const CategoryItem = ({category}) => {
    return (
        <div className="category">
            <div className="category__image">
                <img src={require(`../../../src${category.imageUrl}`)} alt='Alt Text'/>
            </div>
            <div className="category__info">
                <h1 className='category__info-name'>{category.name}</h1>
                <p className='category__info-desc'>{category.description}</p>
                <Link to={`/products/${category.name.toLowerCase()}`}>
                    <Button btnClass={'category__info-button'} type='button'>Explore {category.name}</Button>
                </Link>
            </div>
        </div>
    );
}

export default CategoryItem;