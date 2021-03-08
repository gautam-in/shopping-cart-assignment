import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router';
import nointernet from '../assets/images/no-internet.png';
import Constants from '../constants';
export default function Error(props){
    return(<div className="error-page">
                 <div className="err-img">
                     <LazyLoad height={50} once>
                         <img alt="Internet is down" src={nointernet} /> 
                     </LazyLoad>
                 </div>
                 <p className="error-info">
                    {Constants.TEXTS.DEFAULTS.page_not_found}
                     <br/>
                     <Link to="/home">{Constants.TEXTS.ROUTE_TEXTS.navigate_to_home}</Link>
                 </p>
             </div>

    )
}