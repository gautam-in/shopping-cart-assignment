import React from 'react';
import ReactLoading from 'react-loading';
 
const Loader = ({ type, color, className }) => (
    <ReactLoading type={type} color={color} height={50} width={50} className = {className}/>
);
 
export default Loader;