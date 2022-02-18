import React ,{useState}from 'react'
import {Dropdown} from "react-bootstrap"
import './dropdown-menu.styles.scss'

function DropdownMenu({categories,filterProducts}) {
 
    let[currentOption,setCurrentOption]=useState('Filter By Category');
    const handleSelect=(e,id,name)=>{
        
        setCurrentOption(name)
        filterProducts(id)
        
      }
     
return(
  
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   {`${currentOption}`}
  </Dropdown.Toggle>

  <Dropdown.Menu>
      { categories.map(({name,id,order,key})=>{
       
          return(
            <Dropdown.Item 
            onClick={e=> handleSelect(e,id,name)}
             id={id}
              key={key}>
                  {name}
                  </Dropdown.Item>
          )
      })
    }
  
   
  </Dropdown.Menu>
</Dropdown>
)
}

export default DropdownMenu;