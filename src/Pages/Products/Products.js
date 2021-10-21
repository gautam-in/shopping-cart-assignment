import React,{useEffect} from 'react';
import useProducts from '../../Hooks/useProducts';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProductCard from '../../Components/ProductCard/ProductCard';
import SideBar from '../../Components/SideBar/SiderBar';
import DropDown from '../../Components/DropDown/DropDown';
import CartPage from '../Cart/Cart';
import Modal from '../../Components/Modal/Modal';
import { fetchProductType, fetchAllProducts } from '../../Redux/actions/product';


const ProductPageWrapper = styled.main`
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    
    @media (max-width: 480px){
        flex-direction: column;
        max-width: 100%;
    }
    @media (min-width:481px) and (max-width: 768px) {
        max-width: 100%;
    }
`;

export default function ProductPage() {
    const dispatch = useDispatch();
    const { filteredProducts, filteredProductType, handleProduct } = useProducts();
    const isMobile = useMediaQuery("(max-width: 480px)");
    const isTab = useMediaQuery("(min-width:481px) and (max-width: 768px)");
    const openCart = useSelector((state) => state.cart.openCart);

    useEffect(() => {
        dispatch(fetchProductType());
        dispatch(fetchAllProducts());
    }, []);

    return (
        <>
            <ProductPageWrapper>
                {isMobile ?
                    <DropDown
                        filteredProductType={filteredProductType}
                        handleProduct={handleProduct}
                    />
                    : <SideBar
                        filteredProductType={filteredProductType}
                        handleProduct={handleProduct}
                    />}
                <div className='container-fluid'>
                    <div className='row'>
                        {(filteredProducts || []).map(item => {
                            return (
                                <div className={isTab ? 'col-sm-6' : 'col-sm-4'} key={item.id}>
                                    <ProductCard key={item.id} {...item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ProductPageWrapper>
            {openCart &&
                <Modal>
                    <CartPage header={true} />
                </Modal>
            }
        </>
    )
}