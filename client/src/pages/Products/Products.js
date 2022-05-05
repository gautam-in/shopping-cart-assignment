import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import axios from 'axios';
import Styled from "styled-components";
import Layout from "../../layout/Layout";
import Sidebar from "../../containers/Sidebar/Sidebar";
import Products from "../../containers/Products/Products";

const SectionContainer = Styled.section`
    display: flex;
    @media(max-width: 766px){
       flex-direction: column;
    }
`

const LeftSection = Styled.div`
    width: 20%;
    background : #eee;
    @media(max-width: 766px){
       width: 100%;
       background: none;
    }
`

const RightSection = Styled.div`
    width: 80%;
    @media(max-width: 766px){
       width: 100%;
    }
`

function ProductsPage() {

  const [ sidebarData, setSideBarData ] = useState([])
  const [ productsData, setProductsData ] = useState([])

  useEffect (() => {
    const getCategoriesData = async () => {
     let res = await axios.get('/categories')
      if(res.data){
        setSideBarData(res.data)
      }
    }
    getCategoriesData()
},[])

useEffect (() => {
  const getProductsData = async () => {
   let res = await axios.get('/products')
    if(res.data){
      setProductsData(res.data)
    }
  }
  getProductsData()
},[])

  return (
    <Layout>
      <SectionContainer>
        <LeftSection>
            {!isEmpty(sidebarData) && <Sidebar data={sidebarData}/> }
        </LeftSection>
        <RightSection>
            {!isEmpty(productsData) && <Products data={productsData}/> }
        </RightSection>
      </SectionContainer>
    </Layout>
  )
}

export default ProductsPage;