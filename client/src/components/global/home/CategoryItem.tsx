import { Category } from '../../../utils/types/category';

function CategoryItem({
  category,
  index,
  onClick,
}: {
  category: Category;
  index: number;
  onClick: () => void;
}) {
  return (
    <div className={index % 2 === 0 ? 'category' : 'category-reverse'}>
      <div className="category-img">
        <img src={category.imageUrl} alt="Category" />
      </div>
      <div className="content">
        <h1 className="title">{category.name}</h1>
        <p className="description">{category.description}</p>
        <button type="button" className="button" onClick={onClick}>
          {`Explore ${category.key}`}
        </button>
      </div>
    </div>
  );
}

export default CategoryItem;
