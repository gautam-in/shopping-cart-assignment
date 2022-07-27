import { Col, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductSideBar = ({filterProduct}:any) => {
    return (
        <>
        <Col md={3} style={{backgroundColor:'#eaeaea'}} className='pr-0 d-none d-md-block'>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/fruits&veg' >Fruit&Vegetables</Link></div>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/backery&dairy' >Bakery Cakes and Dairy</Link></div>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/beverages' >Beverages</Link></div>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/beauty&hygiene' >Beauty and Hygiene</Link></div>
            <div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}}><Link to='/babycare' >Baby Care</Link></div>
        </Col>
        <Col className="d-md-none d-block p-0" sm={12}>
        <Form.Select aria-label="Default select example" className="w-100 my-2 category-dropdown">
            <option value="">Select All Categories</option>
            <option value="1">Fruit&Vegetables</option>
            <option value="2">Bakery Cakes and Dairy</option>
            <option value="3">Beverages</option>
            <option value="3">Beauty and Hygiene</option>
            <option value="3">Baby Care</option>
        </Form.Select>
        </Col>
        </>
    )
}

export default ProductSideBar;