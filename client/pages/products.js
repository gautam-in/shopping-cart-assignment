
import axios from 'axios';
import { useRouter } from 'next/router';
import Products from '../components/Products'

const products = ({ categories, products }) => {
    const router = useRouter();

    return (
        <Products categories={categories} products={products} />
    )
}

export const getStaticProps = async () => {

    const res = await axios.get('http://localhost:5000/categories');
    const categories = res.data;
    categories.sort((a, b) => a.order - b.order);
    const resProd = await axios.get('http://localhost:5000/products');
    const products = resProd.data;
    return {
        props: {
            categories,
            products
        }
    }
}

export default products
