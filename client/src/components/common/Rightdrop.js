import React from 'react'
import './Rightdrop.scss'

const Rightdrop= (props)=>{

    return (props.show && <div className="rightdrop" onClick={props.display}/>)
}
export default Rightdrop;