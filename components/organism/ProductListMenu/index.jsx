import React,{Component} from 'react';
import { connect } from 'react-redux';
import { selectCategoryId } from "../../../redux_store/category/actions";
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

class ProductListMenu extends Component {

   render() {
      const { categoryItems, selectedCategoryId } = this.props
      return (
         <ul className={style.noBullet}>
            {categoryItems && categoryItems.map((item, index) => {
               const selected = selectedCategoryId == item.id ? style.selected : ''
               return (
                  <li className={[style.pointer, selected].join(' ')} onClick={(event) => { this.props.selectCategoryId(item.id) }}>
                     {item.name}
                  </li>
               )
            })}
         </ul>
      )
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListMenu);