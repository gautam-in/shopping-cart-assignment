import { Col, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductSideBar = ({setCategory}:any) => {
    return (
        <>
        <Col 
            md={3} 
            style={{backgroundColor:'#eaeaea'}} 
            className='pr-0 d-none d-md-block'
            onClick={(e:any)=>{
                setCategory(e.target.getAttribute('data-value'))
                e.target.focus()
            }}
            >
            <Link to='#' tabIndex={1}><div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}} data-value="5b6899953d1a866534f516e2" >Fruit&Vegetables</div></Link>
            <Link to='#' tabIndex={2}><div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}} data-value="5b6899123d1a866534f516de" >Bakery Cakes and Dairy</div></Link>
            <Link to='#' tabIndex={2}><div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}} data-value="5b675e5e5936635728f9fc30" >Beverages</div></Link>
            <Link to='#' tabIndex={2}><div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}} data-value="5b68994e3d1a866534f516df" >Beauty and Hygiene</div></Link>
            <Link to='#' tabIndex={5}><div style={{borderBottom:'solid', borderColor:'gray', padding:'8px'}} data-value="5b6899683d1a866534f516e0" >Baby Care</div></Link>
        </Col>
        <Col className="d-md-none d-block p-0" sm={12}>
        <Form.Select 
            aria-label="Default select example" 
            className="w-100 my-2 category-dropdown"
            onChange={(e:any)=>{
                setCategory(e.target.value)
            }}
            >
            <option value="">Select All Categories</option>
            <option value="5b6899953d1a866534f516e2">Fruit&Vegetables</option>
            <option value="5b6899123d1a866534f516de">Bakery Cakes and Dairy</option>
            <option value="5b675e5e5936635728f9fc30">Beverages</option>
            <option value="5b68994e3d1a866534f516df">Beauty and Hygiene</option>
            <option value="5b6899683d1a866534f516e0">Baby Care</option>
        </Form.Select>
        </Col>
        </>
    )
}

export default ProductSideBar;