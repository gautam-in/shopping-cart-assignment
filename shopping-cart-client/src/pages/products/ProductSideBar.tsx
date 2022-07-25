import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductSideBar = ({filterProduct}:any) => {
    return (
        <Col md={3} style={{backgroundColor:'#eaeaea'}} className='pr-0 d-none d-md-block'>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/fruits&veg' >Fruit&Vegetables</Link></div>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/backery&dairy' >Bakery Cakes and Dairy</Link></div>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/beverages' >Beverages</Link></div>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/beauty&hygiene' >Beauty and Hygiene</Link></div>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/babycare' >Baby Care</Link></div>
        </Col>
    )
}

export default ProductSideBar;