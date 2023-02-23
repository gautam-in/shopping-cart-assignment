
import Input from '../../ui/elements/textBox';
import Button from '../../ui/elements/button'

import { exploreButton } from '../../common/style';

const Signup = () => {

    return (<div style={{ display: 'flex', alignSelf: 'center', height: '80%', width: '100%', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <h1>Signup</h1>
            <p>We don not share your personal details with anyone</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <Input label='First Name' />
            <Input label='Last Name' />
            <Input type='email' label='Email' />
            <Input type='password' label='Password' />
            <Input type='password' label='Confirm Password' />
            <Button style={exploreButton} value='Signup' />
        </div>
    </div>)
}

export default Signup;