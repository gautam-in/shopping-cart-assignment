import React, { Component } from 'react';
import {Container,Row, Col, Figure} from 'react-bootstrap'
import Categorycard from './Categorycard';
import  './categoryComp.style.scss'
class CategoryComp extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[],
            data_loadded:false
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
        
        // catJson.sort(this.sortByOrder)
        // this.setState(catJson)   
    }
    render() {
        const {categories, data_loadded}= this.state
        
        return (
        <main>
            {
                 <Categorycard categories={categories}/>    
                
            }
            
        </main>
        );
    }
}

export default CategoryComp;