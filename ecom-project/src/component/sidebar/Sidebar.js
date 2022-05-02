import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { categoryData } from "./../../mockdata/categoryData";
import {useParams,useLocation} from "react-router-dom";
import "./sidebar.css";
const Sidebar=(props)=>{
    const[toggle,setToggle]=useState(false);
    const param=useParams();
    const handleToggleOpen=()=>{
        setToggle(false)
    }
    const handleToggleClose=()=>{
        setToggle(true)
    }
    return (
        <div className={toggle?"sidebar-toggle":"sidebar"}>
        {
            categoryData.length>0?categoryData.map((e,i)=>{
                return(
                        i==0?<Link className={e.id==param.id?'active':""} to={`/product/${e.id}`}>{e.name}<span>{toggle?<i className="fa fa-angle-up icon-style" onClick={()=>handleToggleOpen()} ></i>:<i className="fa fa-angle-down icon-style" onClick={()=>handleToggleClose()} ></i>}</span></Link>
                        :<Link className={e.id==param.id?'active':""} to={`/product/${e.id}`} >{e.name}</Link>
                )
            }):""
        }
        
        </div>
    );
}

export default Sidebar;