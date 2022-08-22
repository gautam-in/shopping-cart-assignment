import React from 'react'
import {Helmet} from "react-helmet";
 
const Metatitlewrapper = ({title,description,children}) => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    </Helmet>
    {children}
    </>
  )
}

export default Metatitlewrapper