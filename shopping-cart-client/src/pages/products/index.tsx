import { Row, Col, Container } from "react-bootstrap"
import ProductSideBar from "./ProductSideBar"
import { useCallback, useEffect, useState } from "react"
import axios from "axios";

export interface Product {
      name:string,
      imageURL: string,
      description: string,
      price: number,
      stock: number,
      category: string,
      sku: string,
      id: string
    }

const ProductItem = ({product}:any) =>{
    const {id,name, imageURL, description, price, sku} = product;
    return (
        <Col md={6} lg={3} className='mb-2'>
            <div style={{height:'84px', overflow:"hidden"}}>
                <p style={{fontSize:'large'}}><strong>{name}</strong></p>
            </div>
            <div className="d-lg-block d-flex">
                <div className="my-1 mr-1" style={{flex:1}}><img src={imageURL} alt={sku} className='w-100' /></div>
                <div style={{backgroundColor:'#eaeaea', flex:1, lineHeight:'initial', fontSize:'x-small', overflow:'hidden'}} className='description font-weight-bold ml-1'><p style={{padding:'7px'}}>{description}</p></div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 pl-2 mb-2" style={{fontSize:'small', borderBottom:' dotted lightgray' }}>
                <span className="price-tag d-lg-block d-none">MRP Rs.{price}</span>
                <button className="price-button px-3 py-1 border-0 flex-md-grow-1 flex-lg-grow-0" style={{backgroundColor:'#d80454', color:'white'}}>Buy Now <span className="d-lg-none">@ Rs.{price}</span></button>
            </div>
        </Col>
    )
}

const ProductList = ({products}:{products:Product[]}) =>{
    return (
        <Col className="py-lg-2">
            <Row className="my-3">
                {
                    products.length && products.map((product:Product)=>{
                        return <ProductItem key={product.id} product={product} />
                    })
                }
            </Row>
        </Col>
    )
}

const Products = () =>{
    
    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [products, setProducts] = useState<Product[]>(allProducts)
    const [category, setCategory] = useState('')

    const filterProduct = useCallback(() =>{
      if(category){
        const filteredProducts = allProducts.filter((product)=>product.category==category)
        setProducts(filteredProducts)
      }else{
        setProducts(allProducts)
      }
    },[category, setProducts])

    const getAllProducts = () =>{
      axios.get('http://localhost:5000/products')
      .then(res=>{
        setAllProducts(res.data)
        setProducts(res.data)
      })
    }

    useEffect(()=>{getAllProducts()},[])
    useEffect(()=>{
      filterProduct()
    }, [filterProduct] )

    return (
        <Container fluid className="px-lg-5 mx-md-0 product">
            <Row className="px-lg-5 product-container" style={{minHeight: 'calc(100vh - 124px)'}}>
                <ProductSideBar setCategory={setCategory} />
                <ProductList products={products}/>
            </Row>
        </Container>
    )
}

export default Products;

