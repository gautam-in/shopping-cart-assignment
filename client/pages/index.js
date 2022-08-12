
import Head from 'next/head'
import Banner from '../components/Banner';
import CategoryTable from '../components/List/CategoryTable';
import { getBanners, getCategories } from '../lib/AJAX';

export default function Home({ categories, banners }) {
  return (
    <main className='category-body'>
      <Head>
        <title>Sabka Bazar E-commerce App</title>
      </Head>
      <Banner banners={banners} />
      <CategoryTable categories={categories} />
    </main>

  )
}

export async function getServerSideProps(props) {
  const categories = await getCategories()
  const banners = await getBanners()

  return {
    props: {
      categories,
      banners
    }
  }
}