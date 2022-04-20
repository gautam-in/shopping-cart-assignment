import {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <>
                <Link className='link-item mx-2' to='/home'>Home</Link>
                <Link className='link-item mx-2' to='/products'>Products</Link>
            </>
        );
    };
};
export default Navbar;