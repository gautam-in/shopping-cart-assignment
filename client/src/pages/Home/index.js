import { useMemo } from 'react';
import { Banners } from '../../components/Carousel';
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { CategoryCard } from '../../components';

export const Home = () => {
  const { data: banners } = useFetchAPI('/banners');
  const { data: categories } = useFetchAPI('/categories');

  /* Sorting the categories by order and filtering out the seafood category. */
  const categoryOrder = useMemo(() => {
    return categories.sort((a, b) => a.order - b.order).filter((item) => item.key !== 'seafood');
  }, [categories]);

  return (
    <div>
      <Banners data={banners} />
      <section>
        {categoryOrder?.map((item, index) => {
          return <CategoryCard key={item.id} category={item} index={index} />;
        })}
      </section>
    </div>
  );
};
