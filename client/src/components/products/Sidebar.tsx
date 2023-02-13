import { useMemo } from 'react';
import useQuery from '../../hooks/useQuery';
import { Category } from '../../utils/types/category';

function Sidebar({
  selectedCategory,
  selectCategory,
}: {
  selectedCategory: string;
  selectCategory: any;
}) {
  const { data: categories } = useQuery('/categories');
  const categoryOrder = useMemo(
    () =>
      categories
        .sort((a: Category, b: Category) => a.order - b.order)
        .filter((item: Category) => item.key !== 'seafood'),
    [categories],
  );
  return (
    <div className="sidebar">
      {categoryOrder.map((category: Category) => (
        <button
          type="button"
          className={selectedCategory === category.id ? 'sidebar-item-active' : 'sidebar-item'}
          key={category.key}
          onClick={() => selectCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
