import { useRouter } from "next/dist/client/router"
import styled from "styled-components"
import ProductCard from '../../components/ProductCard'

export const getServerSideProps = async()=>{
    const data= await fetch('http://localhost:5000/products')
    const dataParse =await data.json()
    return {
        props:{
            idData:dataParse
        }
    }
}

const CategoryStyles = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`

export default function productCategories({idData}) {
    const router = useRouter()
    const id = router.query.category
 

   let filterData = idData.filter((item)=>item.category===id)
   
    return (
        <CategoryStyles>
           {filterData.map((item)=>{
               return <ProductCard product={item}/>
           })}
        </CategoryStyles>
    )
}
