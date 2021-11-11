import logo from './logo.svg';
import React from 'react';
import './App.css';
import { connect } from "react-redux";
import {withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';
import { compose } from 'redux';
import { editName } from './Actions/homeactions'
function Home(props) {
  
const history = useHistory();
  return (
    <>
    <div className="App">
     <h1>Welcome To Sabka Bazzar</h1>
     <button onClick={() => history.push('/signin')} >Log IN</button>
    </div>
    <h2 className="subHeading" >Shop by category</h2>
    {props.state.store.categories.map(item => {
      return(
         <button onClick={() => { history.push(`/products/${item.id}`) }} className="category" >
           <h3>{item.name}</h3>
           <p>{item.description}</p>
        <img src={item.imageUrl} />
        </button> 
      );
    })}

<h2 className="subHeading" >Latest Offers!!
<br /> Select your offer
</h2>

{props.state.store.banners.map(item => {
      return(
         <button onClick={() => { history.push(`/products/${item.id}`) }} className="banner" >
        <img src={item.bannerImageUrl} />
        </button> 
      );
    })}
   
    </>
  );
}

function mapStateToProps(state) {
  return {
     state: state
  };

}

const mapDispatchToProps = dispatch => {
  return {
      editName: name => dispatch(editName(name))
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps)) (Home);
