import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useQuery, gql } from "@apollo/client";
import {Banners} from "../components/Banners";
import {useEffect} from "react";
import {Button} from "antd";
import {CategoryCards} from "../components/CategoryCards";
import {Loading} from "../components/Loading";

const GET_BANNERS = gql`
    query GetBanners {
        banners{
            _id
            temp_url
            isActive
            order
            banner_uid
            bannerImageAlt
        }
    }
`;

const GET_CATEGORIES = gql `
    query GetCategories {
        categories {
            _id
            name
            key
            temp_url
            description
            order
            category_uid
        }
    }
`

export default function Home() {
    const bannersApolloObj = useQuery(GET_BANNERS);
    const categoriesApolloObj = useQuery(GET_CATEGORIES)
    if(bannersApolloObj.loading || categoriesApolloObj.loading) {
        return <Loading/>
    } else if (bannersApolloObj.error || categoriesApolloObj.error) {
        return <div>{"Erorr: " + (bannersApolloObj.error.message || categoriesApolloObj.error)}</div>
    } else {
        console.log("banner", bannersApolloObj.data, categoriesApolloObj.data)
        return (
            <div style={{padding: 20}}>
                <Banners bannerData={bannersApolloObj.data.banners}/>
                <CategoryCards categories={categoriesApolloObj.data.categories}/>
            </div>
        )
    }
}


