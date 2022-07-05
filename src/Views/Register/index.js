import '../../CSS/signInUser.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { createNewUserRecord } from '../../Utility/CheckLogin';

const RegisterUser = () => {
  const [itemsInCart, setCartItems] = useState([])
  const [viewCart, setViewCart] = useState(false)
  const FirstNameRef = useRef(null)
  const LastNameRef = useRef(null)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate()


  const registerUserDetails = (event) =>{
    event.preventDefault()
        if(!emailRef.current.value || !passwordRef.current.value || !confirmPasswordRef.current.value || !FirstNameRef.current.value || !LastNameRef.current.value ){
        alert("Do not leave form fields blank");
        return
        }
    
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            alert("Your passwords doesn't match")
            return
        }

        let loginData ={
        name: FirstNameRef.current.value,
        lastname: LastNameRef.current.value,
        email : emailRef.current.value,
        password: passwordRef.current.value
        }
        createNewUserRecord(loginData).then((resolvedData)=>{
            if(resolvedData === 'new'){
                retrieveCartData()
                alert(`you have been been registered and logged in as ${emailRef.current.value}`)
                navigate("/")
            } else {
                retrieveCartData()
                alert(`you are already registered with us as ${emailRef.current.value}. Signing you in.`)
                navigate("/")
            }
        },()=>{
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
                <h2>Signup</h2>
                <p className='access-label semi-bold'>We do not share your personal details with anyone.</p>
            </div>

            <div className='login-block offset-md-1 md-3 flex-c align-start justify-between'>
              <form className='md-12' onSubmit={registerUserDetails}>


                <p id='name' className='label-name'>First Name</p>
                <input
                     ref={FirstNameRef} 
                     name='name' 
                     autoComplete='off'
                     onMouseDown={()=>{changeLabel(FirstNameRef.current.name)}} 
                     onMouseLeave={()=>{revertLabel(FirstNameRef.current.name)}}
                     type='text'/>


                <p id='surname' className='label-name'>Last Name</p>
                <input 
                    ref={LastNameRef} 
                    name='surname' 
                    autoComplete='off'
                    onMouseDown={()=>{changeLabel(LastNameRef.current.name)}} 
                    onMouseLeave={()=>{revertLabel(LastNameRef.current.name)}}
                    type='text'/>


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
                    onMouseDown={()=>{changeLabel(passwordRef.current.name)}} 
                    onMouseLeave={()=>{revertLabel(passwordRef.current.name)}}
                    type='password'/>


                <p id='cnfpassword' className='label-password'>Confirm Password</p>
                <input 
                    ref={confirmPasswordRef} 
                    name='cnfpassword' 
                    onMouseDown={()=>{changeLabel(confirmPasswordRef.current.name)}} 
                    onMouseLeave={()=>{revertLabel(confirmPasswordRef.current.name)}}
                    type='password'/>

                <input type='submit' className='login-btn pointer' value='SignUp'/>
              </form>
            </div>

          </div>
      <Footer/>
    </div>
  )
}

export default RegisterUser;
