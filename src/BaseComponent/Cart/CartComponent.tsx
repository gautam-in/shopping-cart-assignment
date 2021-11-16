import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { memo } from "react";
import "./CartComponent.scss";
import { ImagesConstantIndex } from "../../Utility/Images/ImagesConstantIndex";
import { ROUTE_URL } from "../../Utility/RouteUrlConstant";
import { IState } from "../../Store/Store";
import { getCartItemCount } from "../../Store/Selectors";

interface ICartProps {
    className?: string;
}

interface IStoreProps {
    cartItemCount: number;
}

export type TCartComponentProps = IStoreProps & ICartProps;

export const CartComponent: React.FC<TCartComponentProps> = memo(
    (
        props: TCartComponentProps
    ) => {
        const BASE_CLASSNAME: string = "cart";
        const CART_ICON_CLASSNAME: string = `${BASE_CLASSNAME}_icon`;
        const CART_ITEMS_CLASSNAME: string = `${BASE_CLASSNAME}_items`;
        const CLASSES: string = `${BASE_CLASSNAME} ${props.className}`;
        return (
            <Link to={ROUTE_URL.CART_PAGE} className={CLASSES}>
                <img
                    src={ImagesConstantIndex.CART}
                    alt="cart"
                    className={CART_ICON_CLASSNAME}
                />
                <p className={CART_ITEMS_CLASSNAME}>{props.cartItemCount} items</p>
            </Link>
        );
    }
) 

function mapStateToProps(state: IState): IStoreProps {
    return {
        cartItemCount: getCartItemCount(state.appState),
    };
}

export default connect<IStoreProps, {}, {}, IState>(mapStateToProps)(
    CartComponent
);
