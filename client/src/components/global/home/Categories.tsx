import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useQuery from '../../../hooks/useQuery';
import { Category } from '../../../utils/types/category';
import CategoryItem from './CategoryItem';

function Categories() {
  const { data: categories } = useQuery('/categories');
  const navigate = useNavigate();

  const categoryOrder = useMemo(
    () =>
      categories
        .sort((a: Category, b: Category) => a.order - b.order)
        .filter((item: Category) => item.key !== 'seafood'),
    [categories],
  );

  const handleCategoryClick = (category: Category) => {
    navigate(`/products`, { state: category.id });
  };

  return (
    <section className="categories">
      {categoryOrder.map((category: Category, index: number) => (
        <CategoryItem
          category={category}
          index={index}
          key={category.id}
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </section>
  );
}

export default Categories;
