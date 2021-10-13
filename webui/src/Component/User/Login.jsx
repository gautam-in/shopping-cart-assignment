import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Button/Button';
import css from './User.module.css';
import {signinRules} from './rules';
import { userSignin } from './userFunc';
import {useHistory} from 'react-router-dom';
import {useGlobalData} from '../../Context/dataContext';
function Login(){
    let history=useHistory();
    let formState=useForm({email:'',password:''});
    let {setUser}=useGlobalData();
    let {formInvalid,setSubmitState,submitState}=formState;
    function handleSubmit(e){
        e.preventDefault();
        let res=userSignin(formState.inputs);
        setSubmitState(res);
        if(res.data){
            setUser(res.data);
            let path="/";
            if(history.location?.state?.refrer){
                path=history.location.state.refrer;
            }
            history.push(path);
        }
    }
    return <div className={css.LoginContainer}>
                <div className="flex-fill">
                    <h1>Login</h1>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
                <div className="flex-fill">
                <form method="POST" onSubmit={handleSubmit}>
                    <Input name="email" rule={signinRules.email} formState={formState}  type="email" label="Email"/>
                    <Input name="password" rule={signinRules.password} formState={formState} type="password" label="Password"/>
                    <Button disabled={formInvalid(signinRules)} block type="submit">Login</Button>
                </form>
                <p className={submitState.error?css.ErrorText:css.SuccessText}>{submitState.message}</p>
                </div>
        </div>
}

export default Login;