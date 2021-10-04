import React from 'react';
import styled from 'styled-components'

const Info = styled.div`
 h3{
     font-weight:bold;
     font-size:22px;
 },
 p{
    font-size: 14px;
    font-weight: 500;   
 }
`
const FormInfo = ({name,description})=>{
    return(
        <Info>
          <h3>{name}</h3>
          <p className="login-desc">
           {description}
          </p>
        </Info>
    )
}
export default FormInfo;

