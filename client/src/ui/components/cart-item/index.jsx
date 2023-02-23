import Button from "../../elements/button";

export const addRemoveButton = {
    backgroundColor: "#bf2957",
    borderRadius: "4px",
    display: "inline-block",
    cursor: "pointer",
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: "17px",
    fontWeight: "bold",
    padding: "7px 12px",
    textDecoration: "none",
    textShadow: "0px 0px 0px #2f6627"
}

const CartItem = (props) => {
    const { cartItem } = props;
    return (<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <img alt='' width='100' height='100' src={cartItem.imageURL} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginLeft: '10px' }}>
                <h3>{cartItem.name}</h3>
                <div style={{ display: 'flex', flexDirection: 'row', height: '40px', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Button style={addRemoveButton} value='-' />
                    2
                    <Button style={addRemoveButton} value='+' />
                    <p>{`X   Rs.${cartItem.price}`}</p>
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', alignSelf: 'center', justifySelf: 'flex-end', width: '10%' }}>{`Rs. ${cartItem.price * 2} `}</div>
    </div >)
}

export default CartItem;