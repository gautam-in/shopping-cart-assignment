
import Head from 'next/head'
import Banner from '../components/Banner';
import CategoryTable from '../components/List/CategoryTable';
import { getBanners, getCategories } from '../lib/AJAX';

export default function Home({ categories, banners }) {
  return (
    <div >
      <Head>
        <title>Sabka Bazar E-commerce App</title>
      </Head>

      <main className='category-body'>
        <Banner banners={banners} />
        <CategoryTable categories={categories} />
      </main>
    </div >
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