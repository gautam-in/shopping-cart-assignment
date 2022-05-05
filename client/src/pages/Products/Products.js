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
  const [ sidebarDataId, setSideBarDataId] = useState('')
  const [filterProductsData, setFilterProductsData] = useState([])


  useEffect (() => {
    const getCategoriesData = async () => {
     let res = await axios.get('/categories')
      if(res.data){
        setSideBarData(res.data)
        setSideBarDataId(res.data[0].id)
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

useEffect(() => {

  if(!isEmpty(productsData) && !isEmpty(sidebarDataId)){
    function filteredProductsData (data,id) {
      let result = data.filter((value) => value.category === id)
      setFilterProductsData(result)
    }
    filteredProductsData(productsData,sidebarDataId)
  }

},[sidebarDataId,productsData])

  return (
    <Layout>
      <SectionContainer>
        <LeftSection>
            {!isEmpty(sidebarData) && <Sidebar data={sidebarData} setSelectedCategoryId={setSideBarDataId} selectedCategoryId={sidebarDataId}/> }
        </LeftSection>
        <RightSection>
            {!isEmpty(filterProductsData) && <Products data={filterProductsData}/> }
        </RightSection>
      </SectionContainer>
    </Layout>
  )
}

export default ProductsPage;