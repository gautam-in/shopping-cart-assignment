import ProductListingPage from '../../containers/ProductListingPage'

export async function getStaticProps() {

    const products = await fetch('http://localhost:4000/products').then(res => res.json())
    const categories = await fetch('http://localhost:4000/categories').then(res => res.json())

    return ({
        props: {
            products,
            categories: categories.filter(category => category.enabled).sort((a, b) => a.order - b.order),
        }
    })
}

export default ProductListingPage