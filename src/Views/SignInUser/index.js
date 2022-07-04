import '../../CSS/signInUser.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { createCurrentUser } from '../../Utility/CheckLogin';

const SignInUser = () => {
  const [itemsInCart, setCartItems] = useState([])
  const [viewCart, setViewCart] = useState(false)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate()


  const getLoginDetails = (event) =>{
    event.preventDefault()
    if(!emailRef.current.value || !passwordRef.current.value ){
      alert("Form Field cannot be blank");
      return
    }
    let loginData ={
      email : emailRef.current.value,
      password: passwordRef.current.value
    }
    createCurrentUser(loginData).then((resolvedData)=>{
        if(resolvedData === 'loggedIn'){
          retrieveCartData()
          alert(`you have been logged in as ${emailRef.current.value}`)
          navigate("/")
        }
        else if (resolvedData === 'incorrect credentials')
          alert("Login credentials don't match")
        
    }, () => {
        alert("You are not registered with us")
        return
    })
  }

  const changeLabel = (data) => {
    document.getElementById(data).style.color = "#58D780"
    document.getElementById(data).style.transition = '0.7s';
    document.getElementById(data).style.fontSize = "10px"
  }

  const revertLabel = (data) => {
    document.getElementById(data).style.color = 'black';
    document.getElementById(data).style.transition = '0.7s';
    document.getElementById(data).style.fontSize = "13px"
  }

  const retrieveCartData = () => {
    setCartItems(JSON.parse(localStorage.getItem("cartData")))
  }
  
  const showCart = () =>{
    !!viewCart ? setViewCart(false) : setViewCart(true)
  }
  


  return (
    <div className="container-sign">
      <Header itemsInCart={!!itemsInCart && itemsInCart.length > 0 ? itemsInCart.length : 0} showCart={showCart}/>
        
          <div className='sign-in-pad flex-r align-center'>

            <div className='md-3 offset-md-3 flex-c align-start justify-spc-between'>
                <h2>Login</h2>
                <p className='access-label semi-bold'>Get access to your Orders, Wishlist and Recommendations</p>
            </div>

            <div className='login-block offset-md-1 md-3 flex-c align-start justify-between'>
              <form className='md-12' onSubmit={getLoginDetails}>

                <p id='email' className='label-email'>Email</p>
                <input
                   ref={emailRef} 
                   name='email'  
                   autoComplete='off'
                   onMouseDown={()=>{changeLabel(emailRef.current.name)}} 
                   onMouseLeave={()=>{revertLabel(emailRef.current.name)}}
                   type='email'/>

                <p id='password' className='label-password'>Password</p>
                <input 
                    ref={passwordRef} 
                    name='password' 
                    autoComplete='off'
                    onMouseDown={()=>{changeLabel(passwordRef.current.name)}} 
                    onMouseLeave={()=>{revertLabel(passwordRef.current.name)}} 
                    type='password'/>

                <input type='submit' className='login-btn pointer' value='Login'/>

              </form>
            </div>

          </div>
      <Footer/>
    </div>
  )
}

export default SignInUser;
