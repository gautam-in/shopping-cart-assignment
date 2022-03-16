import React from "react";
import SideNav from "../../components/SideNav/Sidenav";
import { Select } from 'antd';
import ProductContainer from "../../components/ProductContainer/ProductCOntainer";
import './product.styles.scss';
import { connect } from 'react-redux';

const { Option } = Select;

class Products extends React.Component {
  state = {
    resultedlist:[]
  }

  componentDidMount() {
    this.setState((state) => ({
      resultedlist: this.props.products
    }))
  }
  onClickofProduct = (item) => {
    this.filterproducts(item.id);
    
  }
  handleSelectChange=(id)=>{
    this.filterproducts(id);
  }
  filterproducts=(id)=>{
    let resultedproducts = this.props.products.filter((product) => {
      return product.category == id
    });
   this.setState({
      resultedlist: resultedproducts
    })
  }
  render() {

    return (
      <div className="product_container flex container">
        <>
          <div className="navigation_mobile">
            <Select  placeholder="Select a Product" className="mobile_product_select" onChange={(e)=>this.handleSelectChange(e)}>
              {
                    this.props.categories &&  this.props.categories.map((item)=>{
                        return item.enabled ?<Option value={item.id} className='sidenav_title' key={item.id} onSelect={()=>this.onClickofProduct(item)}>{item.name}</Option>  :null
                    })
              }
            </Select>
          </div>
          <SideNav categories={this.props.categories} onClickofProduct={this.onClickofProduct} />
        </>

        <ProductContainer filteredList={this.state.resultedlist} />

      </div>
    )
  }
}
const mapStateToPros = (state, prop) => {
  return {
  banner_data:state.serverReducer.banners,
  categories:state.serverReducer.categories,
  products:state.serverReducer.products

  }
}

export default connect(mapStateToPros,null)(Products);