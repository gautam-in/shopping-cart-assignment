import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import TopNavbar from '../components/TopNavbar';
import ProductCard from '../components/plp/ProductCard';
import Productlist from '../components/plp/Productlist';
import './plp.style.scss'


class Plpage extends Component {
    constructor(props){
        super(props)
        this.state={
            filtered:false,
            categories:[],
            products:[],
            filteredProducts:[],
            data_loadded:false,
            filterdID:''
        }
    }
    sortByOrder( a, b ) {
        if ( a.order < b.order ){
          return -1;
        }
        if ( a.order > b.order ){
          return 1;
        }
        return 0;
      }
    componentDidMount(){
        var catJson
        fetch("http://localhost:5000/categories")
        .then((res) => res.json())
        .then((json) => {
           json.sort(this.sortByOrder)
            this.setState({
                categories:json,
                data_loadded:true
            })
            
        })
        

        //======================================

        fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((json) => {
            // json.sort(this.sortByOrder)
            this.setState({
                products:json,
                filteredProducts:json
            })
        })
        // catJson.sort(this.sortByOrder)
        // this.setState(catJson)   
    }
    parentCallback= (filterFromChild) => {
        // console.log(filterFromChild);
        // this.setState({filter: filterFromChild},() =>{
        if(this.state.filtered==false){
            var filterItems =  this.state.products.filter(item => item.category==filterFromChild)
            this.setState({filteredProducts:filterItems}, ()=> {this.setState({filtered:true}); this.setState({filterdID:filterFromChild}) })
            // console.log(this.state.fil);
        }
        else{
            this.setState({filteredProducts:this.state.products}, ()=> {this.setState({filtered:false})})
            this.setState({filtered:false})
        }
        // })
        // this.setState({products: filterItems})
        // console.log(this.state.categories);
    }
    render() {
        const {categories,filteredProducts, filterdID, filtered}= this.state
        
        console.log(filteredProducts.category);
        return (
            <>
            <TopNavbar/>
            <Container  className='main'>
                <Row>
                    <Col>
                        {/* <FilterComp parentCallback={this.parentCallback} categories={categories}/> */}
                    
                        <Container className='sidebar'>
                            {
                            (categories)?  categories.map((cat,index) =>{ 
                                return (cat['imageUrl']) ? (<Row >
                                        <Col className={(filterdID === cat.id && filtered) ? `txtcenter btn highlight` : `txtcenter btn`}  onClick={()=> this.parentCallback(cat.id)}>{cat.name}</Col>
                                        
                                    </Row>):''
                                    
                            }):''
                            
                            
                            }
                        </Container>
                    </Col>
                    <Col xs={9}>
                       
                             
                                  <Productlist  products={filteredProducts}/>
                            
                          </Col>
                </Row>
            </Container>
       </>
        );
    }
}

export default Plpage;