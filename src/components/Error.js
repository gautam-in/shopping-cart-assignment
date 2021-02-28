import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router';
import nointernet from '../assets/images/no-internet.png';
export default class Error extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(<div className="error-page">
            <div className="err-img">
                <LazyLoad height={50} once>
                    <img alt="Internet is down" src={nointernet} /> 
                </LazyLoad>
            </div>
            <p className="error-info">
                Page Not Found!
                <br/>
                <Link to="/home">Click here to go home page</Link>
            </p>
        </div>);
    }
}