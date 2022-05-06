import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import axios from 'axios';
import Styled from "styled-components";
import H1 from "../../components/Typography/H1";
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
    display: ${props => props.alignCenter ? "flex" : ""};
    justify-content: ${props => props.alignCenter ? "center" : ""};
    align-items: ${props => props.alignCenter ? "center" : ""};
    
    width: 80%;
    @media(max-width: 766px){
       width: 100%;
    }
`

const NoProductsContainer = Styled.div`
    @media(max-width: 766px){
        margin-top: 60px;
    }
`


function ProductsPage() {

  const [ categoriesData, setCategoriesData ] = useState([])
  const [ productsData, setProductsData ] = useState([])
  const [ selectedCategoryId, setSelectedCategoryId] = useState('')
  const [ filterProductsData, setFilterProductsData] = useState([])


  useEffect (() => {
    const getCategoriesData = async () => {
     let res = await axios.get('/categories')
      if(res.data){
        setCategoriesData(res.data)
        setSelectedCategoryId(res.data[0].id)
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

  if(!isEmpty(productsData) && !isEmpty(selectedCategoryId)){
    function filteredProductsData (data,id) {
      let result = data.filter((value) => value.category === id)
      setFilterProductsData(result)
    }
    filteredProductsData(productsData,selectedCategoryId)
  }

},[selectedCategoryId,productsData])

const handleCategoryClick = (category) => {

  if(category.id === selectedCategoryId){
    setSelectedCategoryId(categoriesData[0].id)
  }else{
    setSelectedCategoryId(category.id)
  }
}

const handleProductClick = (product) => {
  console.log(product)
}

  return (
    <Layout>
      <SectionContainer>
        <LeftSection>
            {!isEmpty(categoriesData) && <Sidebar data={categoriesData} handleCategoryClick={handleCategoryClick} selectedCategoryId={selectedCategoryId}/> }
        </LeftSection>
        <RightSection alignCenter={isEmpty(filterProductsData)}>
            {!isEmpty(filterProductsData) ? <Products data={filterProductsData}  handleProductClick={handleProductClick}/>  : <NoProductsContainer><H1>No Products To Show</H1></NoProductsContainer>}
        </RightSection>
      </SectionContainer>
    </Layout>
  )
}

export default ProductsPage;