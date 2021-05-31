
import axios from 'axios'
import CategoryBanners from '../components/Home/CategoryBanners';
import ImageSlider from '../components/Home/ImageSlider';
import Head from 'next/head';

export default function Home({ categories, banners }) {

  return (
    <div>
      <Head>
        <title>Sabka Bazaar | Home</title>
      </Head>
      <ImageSlider banners={banners} />
      <CategoryBanners categories={categories} />
    </div>
  )
}

export const getStaticProps = async () => {

  const [res, resBann] = await Promise.all([
    axios.get('http://localhost:5000/categories'),
    axios.get('http://localhost:5000/banners')
  ])
  const categories = res.data;
  categories.sort((a, b) => a.order - b.order)

  const banners = resBann.data;
  return {
    props: {
      categories,
      banners
    }
  }
}
