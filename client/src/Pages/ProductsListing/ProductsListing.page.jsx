import { useEffect,useState } from "react";
import axios from "axios";

const ProductsListing = props => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/products').then(res=>setProducts(res.data))
      },[]);

    return (
        <>
        Products Listing
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
            
            {
                products && products.map(prod => (
                    <div key={prod.id}>
                        <h5>{prod.name}</h5>
                        <img src={prod.imageURL} alt="" />
                        <p>MRP: Rs {prod.price}</p>
                        <button>Buy Now</button>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default ProductsListing;