import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Products from "../../components/products/products";
import UserService from "../../sevices/user-service";
import './product.scss'
import { useLocation } from 'react-router-dom';

const Product = (props) => {
    const [allProduct, setAllProduct] = useState([])
    const [allProductFiltered, setAllProductFiltered] = useState([])
    const [CategoryArray, setCategoryArray] = useState([])
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()
    useEffect(() => {
        getAllProduct()
        getAllCategory()
    }, [])


    const getAllProduct = () => {
        new UserService().getAllProducts().then(res => res.data).then(data => {
            setAllProduct(data)
            let products=data
            if (query.get('type') && query.get('type') !== '') {
                products=  data.filter(ele=>ele.category === query.get('type'))
            }
            setAllProductFiltered(products)
        }).catch(err => {
            console.log("err ", err);
        })
    }
    const filterProduct=(id)=>{
        props.history.push(`products?type=${id}`)
        console.log(id, allProduct);
        let products=allProduct
            products=  allProduct.filter(ele=>ele.category === id)
        setAllProductFiltered(products)
    }
    const getAllCategory = () => {
        new UserService().getAllCategories().then(data => {
            console.log("all data is ", data);
            setCategoryArray(data.data)
        }).catch(err => {
            console.log("err ", err);
        })
    }
    return <div className='product d-flex flex-column h-100'>
        <Header />
        <div className='product-content d-flex flex-row'>
            <div className='box-1'>
                <ul className='options'>
                    {
                        CategoryArray.map(ele => (
                            <li onClick={()=>filterProduct(ele.id)} key={ele.id}>{ele.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <Products allProducts={allProductFiltered} />
            </div>
        </div>
        <Footer />
    </div>
}
export default withRouter(Product);
