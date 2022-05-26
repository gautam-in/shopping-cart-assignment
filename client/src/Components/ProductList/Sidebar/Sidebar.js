import React, { useRef } from 'react'
import { Select } from 'antd';
import { SidebarWrapper, SidebarMobileWrapper } from './Sidebar.style';
import { setSelectedCategory } from '../ProductListAction';
import { useDispatch } from 'react-redux';

const { Option } = Select;
const Sidebar = ({categories_data}) => {

    const dispatch = useDispatch();

      //Click handler for both desktop and mobile on categories
    const handleClick = (e, from) => {
        if(from === 'laptop') {
            const value = e.target.attributes.getNamedItem('value').value;
            dispatch(setSelectedCategory(value));

        } else if(from === 'mobile') {
            const value = e;
            dispatch(setSelectedCategory(value));
        }
    }

  return (
    <React.Fragment>
        <SidebarWrapper>
            {categories_data && categories_data.length > 0 && categories_data.map((item, index) => {
                return (
                    <div 
                        className='sidebar_item' 
                        value={item.id} 
                        key={item.id}
                        onClick={(e)=>handleClick(e,"laptop")}
                    >
                        {item.name}
                    </div>
                )
            })}
        </SidebarWrapper>

        <SidebarMobileWrapper>
        <Select
           defaultValue="Select a category"
            style={{
                width: "100%",
                background:"#be2857",
                color:"white",
                fontSize:"20px",
            }}
            onChange={(e)=>handleClick(e,"mobile")}
        >
            {categories_data && categories_data.length > 0 && categories_data.map((category, index) => {
                return (
                    <Option value={category.id}>{category.name}</Option>    
                )
            })} 
        </Select>
        </SidebarMobileWrapper>
    </React.Fragment>
  )
}

export default Sidebar;
