
import axios from 'axios'
import CategoryBanners from '../components/CategoryBanners';
import ImageSlider from '../components/ImageSlider';

export default function Home({ categories, banners }) {

  return (
    <div>
      <ImageSlider banners={banners} />
      <CategoryBanners categories={categories} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:5000/categories');
  const categories = res.data;
  categories.sort((a, b) => a.order - b.order)

  const resBann = await axios.get('http://localhost:5000/banners');
  const banners = resBann.data;
  return {
    props: {
      categories,
      banners
    }
  }
}
