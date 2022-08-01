import React from 'react';
import ReactLoading from 'react-loading';
 
const Loader = ({ type, color, className }) => (
    <div className = {className}>
        <ReactLoading type={type} color={color} height={50} width={50} className = {className}/>
    </div>
);
 
export default Loader;