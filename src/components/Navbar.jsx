import {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {handleActiveLinkStatus} from '../utils';

class Navbar extends Component {
    render() {
        return (
            <section className='navigation'>
                <NavLink style={handleActiveLinkStatus} className='link-item mx-2' to='/home'>Home</NavLink>
                <NavLink style={handleActiveLinkStatus} className='link-item mx-2' to='/products'>Products</NavLink>
            </section>
        );
    };
};
export default Navbar;