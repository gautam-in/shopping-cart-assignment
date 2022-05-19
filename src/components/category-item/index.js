import './category-item.scss';
import demoImg from '../../static/images/category/bakery.png'
import Button from '../button';
const CategoryItem = ({category}) => {
    return (
        <div className="category">
            <div className="category__image">
                <img src={demoImg} alt='Alt Text'/>
            </div>
            <div className="category__info">
                <h1 className='category__info-name'>{category.name}</h1>
                <p className='category__info-desc'>{category.description}</p>
                <Button btnClass={'category__info-button'} type='button'>Explore {category.name}</Button>
            </div>
        </div>
    );
}

export default CategoryItem;