import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Layout/Navbar'
import Offers from '../components/Home/Offers'
import Categories from '../components/Home/Categories'
import Footer from '../components/Layout/Footer'
import Layout from '../components/Layout'
import {useEffect} from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Online shopping site in India to buy groceries - Sabka Bazaar
        </title>
      </Head>
      <Layout>
        <Offers />
        <Categories />
      </Layout>
    </>
  )
}

export default Home
