import '../signIn/signIn.css';
import TextField from '../../components/textField'
import {useState,useRef} from  'react'
import {validateFormAndGetErrorMsg, setInitialValues, FocusToErrorField} from '../../utils'
import {SIGNUP_FORM,ROUTES} from '../../utils/constants'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';

function SignUp() {

  let [formValues, setFormValues] = useState(setInitialValues(SIGNUP_FORM))
  let [errors, setErrors] = useState({})
  const signupElRefs= useRef([]);

  let navigate = useNavigate();
  let dispatch = useDispatch()

  let handleSubmit = (e) =>  {
    e.preventDefault()
    if(isValidForm()) {
      setFormValues(setInitialValues(SIGNUP_FORM))
      navigate(ROUTES.home)
    }
  }

  const isValidForm = () => {
    let {errors, length} =  validateFormAndGetErrorMsg(SIGNUP_FORM, formValues)
    FocusToErrorField(signupElRefs, errors)
    setErrors(errors)
    return length == 0
  } 

  return (
    <>
      <section className='fluid_container'>
        <div className='form_section'>
          <div className='form_info'>
            <h1>
              Signup
            </h1>
            <p>We do not share your personal details with anyone.</p>
          </div>
          <div className=''>
            <form className='form_container' onSubmit={handleSubmit}>
              {SIGNUP_FORM.map((field,i) => {
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
                      innerRef = {(el) => (signupElRefs.current[i] = el)}

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

export default SignUp;
