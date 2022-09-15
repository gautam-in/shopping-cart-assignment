
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/Constants'

const useHttp = () => {
    const [banners, setBaneers] = useState([])
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    const fecthBanners = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/banners`)
            setBaneers(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    const fecthCategories = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/categories`)
            setCategories(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    const fecthProducts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/products`)
            setProducts(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fecthBanners()
        fecthCategories()
        fecthProducts()

    },[])

    return {
        banners,
        categories,
        products
    }
}

export default useHttp