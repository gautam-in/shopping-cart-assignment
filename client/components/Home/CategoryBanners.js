import CategoryBanner from './CategoryBanner';

const CategoryBanners = ({ categories }) => {

  return (
    <section style={{ marginTop: '2rem' }}>
      {
        categories.map(category => (
          <CategoryBanner {...category} />
        ))
      }
    </section >
  )
}

export default CategoryBanners
