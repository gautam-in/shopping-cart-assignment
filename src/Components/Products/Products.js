
import NavigationBar from "../NavigationBar/NavigationBar";
import SideBar from "../ProductsSideBar/SideBar";
import ProductDetail from "./ProductDetail";
import Footer from "../Footer/Footer";
const Products=()=>{
return(
<>   
<NavigationBar/>
<div style={{display:"flex",margin: "0 10%"}}>.
<div style={{width:"200px"}}>
<SideBar/>
</div>
<div>
<ProductDetail/>
</div>


</div>
<div>
<Footer />
</div>
</>

)
}

export default Products;