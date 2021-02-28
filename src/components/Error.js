import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import nointernet from '../assets/images/no-internet.png';
export default class Error extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        console.log('state',this.state);
        console.log('props',this.props);
    }
    render(){
        return(<div className="error-page">
            <div className="err-img">
                <LazyLoad height={50} once>
                    <img alt="Internet is down" src={nointernet} /> {/* this.props.img || */}
                </LazyLoad>
            </div>
            <p className="error-info">
                Please check internet connection!
                <br/>
                Sit back and relax we automatically take you to your page once you are online.
            </p>
        </div>);
    }
}