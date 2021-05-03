import React from 'react';
import { connect } from 'react-redux';
import {selectCategoryId} from "../../../redux_store/category/actions";
import style from './productListMenu.module.scss';
 
 // Redux State Configutration
 const mapStateToProps = state => {
    return {
     selectedCategoryId: state.category.selectedId,
    }
 }
 
 // Redux Dispatch Configutration
 const mapDispatchToProps = {
    selectCategoryId: selectCategoryId,
 };
 
class ProductListMenu extends React.Component {
    
    render(){
        const { categoryItems} = this.props
        return(
            <ul className={style.noBullet}>
                {categoryItems && categoryItems.map((item, index) =>{
                    return(
                        <li className={style.pointer} onClick={(event) => {this.props.selectCategoryId(item.id)}}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListMenu);