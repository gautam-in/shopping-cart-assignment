import { TokenContext } from '../components/TokenContext';
import Products from './Products';
import { useContext } from 'react';

export default function AlreadySignedIn({ children }) {

    const { user } = useContext(TokenContext);
    if(user) return <Products/>
    return children;
}
