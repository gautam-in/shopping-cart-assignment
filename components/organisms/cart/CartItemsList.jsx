import styled from 'styled-components';
import { connect } from 'react-redux'
import CartItem from './CartItem'

const CartItemsList = (props) => { 
    return (
        <EachOrderContainer> 
            <ul style = {{ paddingLeft: 0}}>
                { 
                    props.productsBought.map((eachProduct, i) => {
                        return (
                            <li key = {i}> <CartItem productObj = {eachProduct} key = {i} /> </li>
                        )
                    })
                }
            </ul>
        </EachOrderContainer>
    )
}


const mapStateToProps = (state) => {    
    return { productsBought : state.productsBought}
}

export default connect(mapStateToProps)(CartItemsList);


const EachOrderContainer = styled.div`
    background-color : #fff;      
`


