import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Button/Button';
import css from './User.module.css';
import {signupRules} from './rules';
import { userSignUp } from './userFunc';
import {useHistory} from 'react-router-dom';
function Signup(){
    let history=useHistory();
    let formState=useForm({email:'',password:''});
    let {formInvalid,setSubmitState,submitState}=formState;
    function handleSubmit(e){
        e.preventDefault();
        let res=userSignUp(formState.inputs);
        setSubmitState(res);
        if(!res.error){
            history.push("/signin");
        }
    }
    return <div className={css.LoginContainer}>
                <div className="flex-fill">
                    <h1>Signup</h1>
                    <p>We do not share your personal details with anyone.</p>
                </div>
                <div className="flex-fill">
                <form method="POST" onSubmit={handleSubmit}>
                    <Input name="fName" rule={signupRules.fName} formState={formState}   type="text"   label="First Name"/>
                    <Input name="lName" rule={signupRules.lName} formState={formState}   type="text"  label="Last Name"/>
                    <Input name="email" rule={signupRules.email} formState={formState}   type="email"  label="Email"/>
                    <Input name="password" rule={signupRules.password} formState={formState} type="password" label="Password"/>
                    <Input name="rePassword" rule={signupRules.rePassword} formState={formState} type="password" label="Confirm Password"/>
                    <Button disabled={formInvalid(signupRules)} block type="submit">Signup</Button>
                </form>
                <p className={submitState.error?css.ErrorText:css.SuccessText}>{submitState.message}</p>
                </div>
        </div>
}

export default Signup;