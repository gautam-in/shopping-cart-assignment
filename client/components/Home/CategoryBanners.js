import CategoryBanner from './CategoryBanner';

const CategoryBanners = ({ categories }) => {

  return (
    <div style={{ marginTop: '2rem' }}>
      {
        categories.map(category => (
          <CategoryBanner {...category} />
        ))
      }
    </div >
  )
}

export default CategoryBanners
