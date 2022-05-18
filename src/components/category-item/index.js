import './category-item.scss';
// import staticData from '../../../static';
const CategoryItem = ({category}) => {
    return (
        <div className="category">
            <div className="category__image">
                <img src={category.imageUrl} alt='Alt Text'/>
            </div>
            <div className="category__info">
                <h1 className='category__info-name'>{category.name}</h1>
                <p className='category__info-desc'>{category.description}</p>
                <button className='category__info-button'>Explore {category.name}</button>
            </div>
        </div>
    );
}

export default CategoryItem;