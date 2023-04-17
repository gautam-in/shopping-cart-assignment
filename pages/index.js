import React from 'react'
import CommonHead from '../Components/CommonHead'
import Home from '../Components/Home/Home'
import { apiCalls, serverFetchCall } from '../helper'

export default function index(props) {
  return (
    <>
    <CommonHead title={"Sabka Bazzar - Shop for Daily Essentials"} 
    description={"Sabka Bazzar - Buy fruits and vegetables,bakery-cakes-dairy,beverages,beauty-hygiene,baby care"} 
    keywords={"Buy fruits and vegetables,bakery-cakes-dairy,beverages,beauty-hygiene,baby care"}
    ></CommonHead>
    <Home {...props}></Home>
    </>
  )
}
export async function getServerSideProps({res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const apiArr=[
    serverFetchCall(`http://localhost:5000/banners`),
    serverFetchCall(`http://localhost:5000/categories`)
  ]
  const apiRes=await apiCalls(apiArr)
  const [caraousalData,categoriesData]=apiRes;
  return { props: { caraousalData,categoriesData } }
}
