
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import API from '../api';
import { Action } from '../api/action';
import Banner from '../components/Banner';
import CategoryTable from '../components/List/CategoryTable';
import { getBanners, getCategories } from '../lib/AJAX';

export default function Home({ categories, banners }) {
  // const [categories, setCategories] = useState([])
  // const [banners, setBanners] = useState([])

  // useEffect(() => {
  //   getCategories()
  //   getBanners()
  // }, [])

  // let getCategories = async () => {
  //   const api = new API(categories)
  //   try {
  //     let categories = await api.get(Action.categories)
  //     setCategories(categories)
  //   } catch (error) {
  //     alert('Something went wrong !!')
  //   }

  // }

  // let getBanners = async () => {
  //   const api = new API(banners)
  //   try {
  //     let banners = await api.get(Action.banners)
  //     setBanners(banners)
  //   } catch (error) {
  //     alert('Something went wrong !!')
  //   }

  // }

  return (
    <div >
      <Head>
        <title>Sabka Bazar E-commerce App</title>
      </Head>

      <main>
        <Banner banners={banners} />
        <CategoryTable categories={categories} />
      </main>

      <footer>

      </footer>
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