import { useState } from 'react';
import FormGroup from '../../Components/FormGroup/FormGroup.component';

const SignIn = props =>{

    const [fields,setFields] = useState({
        email:'',
        password:'',
    }); 

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFields(state => ({...state , [name]:value}))
    }

    return (
        <div>
            Sign in
            <form onSubmit={(ev) => {ev.preventDefault();console.log(fields)}}>

                <FormGroup type="text" name="email" onChange={handleChange} 
                value={fields.email} id="email" text="Email"/>

                <FormGroup type="password" name="password" onChange={handleChange} 
                value={fields.password} id="password" text="Password"/>
                
                <input type="submit" name="submit" />
            </form>
        </div>
    )
};


export default SignIn;