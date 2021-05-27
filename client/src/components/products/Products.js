import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import useProductList from '../../hooks/useProductList';
import endpoints from '../../config/endpoints';
import { connect } from 'react-redux';

function Products(props) {
    let list = useProductList(endpoints.FETCH_PRODUCT_LIST);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        filter(props.activeCategory);
    }, [list])

    const filter = (categoryID) => {
        if (categoryID === null) {
            setFilteredList([...list]);
        } else {
            setFilteredList([...list.filter(elem => {
                return elem.category === categoryID
            })])
        }
    }

    return (
        <main className="products-page">
            <CategoryList filter={(id) => filter(id)} />
            <ProductList list={filteredList} />
        </main>
    )
}

const mapStateToProps = (state) => ({
    activeCategory: state.category
})

export default connect(mapStateToProps, null)(Products);

