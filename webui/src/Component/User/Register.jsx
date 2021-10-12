import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Button/Button';
import css from './User.module.css';
function Signup(){
    let {inputs, handleChange}=useForm();
    return <div className={css.LoginContainer}>
                <div className="flex-fill">
                    <h1>Signup</h1>
                    <p>We do not share your personal details with anyone.</p>
                </div>
                <div className="flex-fill">
                <form action="">
                    <Input name="fName" handleChange={handleChange} value={inputs.fName} type="text" required id="fName" label="First Name"/>
                    <Input name="lName" handleChange={handleChange} value={inputs.lName} type="text"  id="lName" label="Last Name"/>
                    <Input name="email" handleChange={handleChange} value={inputs.email} type="email" required id="email" label="Email"/>
                    <Input name="password" handleChange={handleChange} value={inputs.password} type="password" required id="password" label="Password"/>
                    <Input name="rePassword" handleChange={handleChange} value={inputs.rePassword} type="password" required id="rePassword" label="Confirm Password"/>
                    <Button block type="submit">Signup</Button>
                </form>
                </div>
        </div>
}

export default Signup;