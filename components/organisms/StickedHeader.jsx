import styled from 'styled-components';
import Link from 'next/link';
import Cart from  './cart/Cart';

export default function StickedHeader() {
    return (
        <div>
            <StickedBar>
                <Header>
                    <img src = "../static/images/logo.png" alt = "logo" height = '60px'/>
                    <MenuNavContainer>
                        <ul>
                            <li><Link href = '/'>Home</Link></li>
                            <li><Link href = '/products'>Products</Link> </li>  
                        </ul> 
                    </MenuNavContainer>
                    <FormCartContainerDiv>
                        <FormNavContainer>
                            <nav>
                                <ul>
                                    <li><Link href = '/login'>Sign In</Link></li>
                                    <li><Link href = '/register'>Register</Link></li>  
                                </ul>             
                            </nav>
                        </FormNavContainer>
                        <AddToCartContainer>
                            <Cart />                
                        </AddToCartContainer>
                    </FormCartContainerDiv>
                </Header>
            </StickedBar>
        </div>
    )
}


const StickedBar = styled.div`
    box-shadow: 0 3px 2px #e6e3e3;
    padding : 0 10%;    
    background-color: #fff;
    height : 60px;
`
const Header = styled.header`
    display : flex;
`
const MenuNavContainer = styled.div`
    li {    
        padding : 0 10px;    
    }
    margin-top: 2%;
`

const FormCartContainerDiv = styled.div`    
    margin-left: auto;
    order: 2;
`
const FormNavContainer = styled.div`
    nav {
        li {
            padding : 0 10px;
        }
    }
`
const AddToCartContainer = styled.div`
    padding : 0 5px; 
    img {
        width : 20px;
        height : auto;        
    }
`


