import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from "next/image";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import dynamic from 'next/dynamic'
const SlickSlider = dynamic(() => import('../components/Home/SlickSlider'), {  loading : ()=> <p>Loading...</p>})
import { Suspense } from 'react'
import CategoryList from "../components/Home/CategoryList";

export default function Home() {
    const [banners, setBanners] = useState(null);
    const router = useRouter();
    const [categories, setCategories] = useState(null);
    useEffect( () => {
        checkIfAuthenticated();
        fetch('http://localhost:5000/api/v1/banners', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        }).then(res => res.json()).then((data) => {
            console.log(data.data);
            setBanners(data.data);
        })
        fetch('http://localhost:5000/api/v1/categories', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        }).then(res => res.json()).then((data) => {
            console.log(data.data);
            setCategories(data.data);
        })



    }, [])
    function  checkIfAuthenticated(){
        if(!localStorage.getItem("token")){
            router.push('/auth/login');
        }
    }
    const getProductsByCategory = (id) => {
        router.push(`/category/${id}/products`)

    }

    /**
     * @param banner          Information about the object.
     * @param banner.bannerImageAlt  Information about the object's members.
     * @param banner._id  Information about the object's members.
     */
  return (
      <>
      <Head>
          <meta name="keywords" content=""/>
          <title>Categories List</title>
      </Head>
    <div>
        <div>
            <SlickSlider banners={banners}/>
            <CategoryList categories={categories}/>
        </div>


    </div>
      </>
  )
};
