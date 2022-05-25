import './signIn.css';
import TextField from '../../components/textField'
import {useState,useRef,createRef} from  'react'
import {validateFormAndGetErrorMsg, setInitialValues, FocusToErrorField} from '../../utils'
import {SIGNIN_FORM,ROUTES} from '../../utils/constants'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {setUserDetails} from './signInSlice'
function SignIn() {

  let [formValues, setFormValues] = useState(setInitialValues(SIGNIN_FORM))
  const elementsRef= useRef([]);
  let [errors, setErrors] = useState({})
  let navigate = useNavigate();
  let dispatch = useDispatch()

  let handleSubmit = (e) =>  {
    e.preventDefault()
    if(isValidForm()) {
      dispatch(setUserDetails(formValues))
      setFormValues(setInitialValues(SIGNIN_FORM))
      navigate(ROUTES.home)
    }
  }

  const isValidForm = () => {
    let {errors, length} =  validateFormAndGetErrorMsg(SIGNIN_FORM, formValues)
    FocusToErrorField(elementsRef, errors)
    setErrors(errors)
    return length == 0
  } 

  return (
    <>
      <section className='fluid_container'>
        <div className='form_section'>
          <div className='form_info'>
            <h1>
              Login
            </h1>
            <p>Get access to your orders, Wishlist and Recommendations</p>
          </div>
          <div className=''>
            <form className='form_container' onSubmit={handleSubmit}>
              {SIGNIN_FORM.map((field,i) => {
                return (
                  <div className='form-group' key={field.id}>
                    <TextField
                      value={formValues[field.id]}
                      onChange={(e) => {
                        const {name,value} = e.target
                        setFormValues({...formValues, [name]: value});
                      }}
                      id={field.id}
                      label={field.label}
                      type={field.type}
                      name={field.id}
                      aria-label={field.label}
                      aria-required={field.required}
                      aria-labelledby={`${field.id}_label ${field.id}_error`}
                      innerRef = {(el) => (elementsRef.current[i] = el)}
                    />
                    <div  aria-live="polite" id={`${field.id}_error`}>
                      <span className='error_msg' >{errors[field.id]}</span>
                    </div>
                  </div>
                )
              })}
              <button className='submit_btn' type="submit"> Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
