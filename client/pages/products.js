
import axios from 'axios';
import { useRouter } from 'next/router';
import Products from '../components/Products/Products'
import Head from 'next/head';

const products = ({ categories, products }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <Products categories={categories} products={products} />
        </>
    )
}

export const getStaticProps = async () => {

    const [res, resProd] = await Promise.all([
        axios.get('http://localhost:5000/categories'),
        axios.get('http://localhost:5000/products')
    ])
    const categories = res.data;
    categories.sort((a, b) => a.order - b.order);
    
    const products = resProd.data;
    return {
        props: {
            categories,
            products
        }
    }
}

export default products
