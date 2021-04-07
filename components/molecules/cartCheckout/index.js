import { Button } from "@material-ui/core";

export default function CartCheckout(props) {
    return (
        <div>
            <p>Promo code can be applied on payment page</p>
            <Button className="buttonW" size="small" variant="contained" color="secondary"
                style={{ width: '100%', height: '32px' }}
            >
                <span style={{ position: 'absolute', left: '10px' }}>Proceed to checkout </span>
                <span style={{ position: 'absolute', right: '10px' }}>
                    <span>Rs. {props.totalPrice}</span>
                </span>
            </Button>
        </div>
    )
}