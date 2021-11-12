import { connect } from "react-redux";

import "./CartPageComponent.scss";
import { LinkButtonComponent } from "../../BaseComponent/LinkButton/LinkButtonComponent";
import { PlusMinusButtonComponent } from "../../BaseComponent/PlusMinusButton/PlusMinusButtonComponent";
import { ImagesConstantIndex } from "../../Utility/Images/ImagesConstantIndex";
import { ROUTE_URL } from "../../Utility/RouteUrlConstant";
import { ICartItem } from "../../Interfaces/ICartItem";
import { IState } from "../../Store/Store";
import { addProductToCart, removeProductFromCart } from "../../Model/Model";
import { getCartItemCount, getTotalCartPrice } from "../../Store/Selectors";

interface IStoreProps {
    cartItemList: Array<ICartItem>;
    cartValue: number;
    totalCartPrice: number;
}

type TCartPageComponentProps = IStoreProps;

const CartPageComponent: React.FC<TCartPageComponentProps> = (
    props: TCartPageComponentProps
) => {
    const BASE_CLASSNAME: string = "cart-page";
    const CART_PAGE_HEADER_CLASSNAME: string = `${BASE_CLASSNAME}_header`;
    const HEADER_ITEM_COUNT_CLASSNAME: string = `${CART_PAGE_HEADER_CLASSNAME}_item-count`;
    const CART_PAGE_ITEMS_CLASSNAME: string = `${BASE_CLASSNAME}_items-section`;
    const CART_EMPTY_CLASSNAME: string = `${CART_PAGE_ITEMS_CLASSNAME}_empty`;
    const CART_EMPTY_HEADER_CLASSNAME: string = `${CART_EMPTY_CLASSNAME}_header`;
    const CART_EMPTY_SUB_HEADER_CLASSNAME: string = `${CART_EMPTY_CLASSNAME}_sub-header`;
    const ITEMS_CLASSNAME: string = `${BASE_CLASSNAME}_items`;
    const ITEMS_IMAGE_CLASSNAME: string = `${ITEMS_CLASSNAME}_image-section`;
    const IMAGE_CLASSNAME: string = `${ITEMS_IMAGE_CLASSNAME}_image`;
    const ITEMS_HEADER_CLASSNAME: string = `${ITEMS_CLASSNAME}_header`;
    const ITEMS_BUTTON_CLASSNAME: string = `${ITEMS_CLASSNAME}_button`;
    const ITEMS_TOTAL_CLASSNAME: string = `${ITEMS_CLASSNAME}_total`;

    const CART_PAGE_TAG_CLASSNAME: string = `${BASE_CLASSNAME}_tag`;
    const TAG_IMAGE_CLASSNAME: string = `${CART_PAGE_TAG_CLASSNAME}_image`;
    const TAG_LINE_CLASSNAME: string = `${CART_PAGE_TAG_CLASSNAME}_line`;
    const CART_PAGE_CHECKOUT_CLASSNAME: string = `${BASE_CLASSNAME}_checkout`;
    const CHECKOUT_MESSAGE_CLASSNAME: string = `${CART_PAGE_CHECKOUT_CLASSNAME}_message`;
    const CHECKOUT_BUTTON_CLASSNAME: string = `${CART_PAGE_CHECKOUT_CLASSNAME}_button`;

    const CartPageTagSection = () => {
        return (
            <div className={CART_PAGE_TAG_CLASSNAME}>
                <img
                    className={TAG_IMAGE_CLASSNAME}
                    src={ImagesConstantIndex.LOWEST_PRICE}
                    alt="you won't find it cheaper anywhere"
                />
                <span className={TAG_LINE_CLASSNAME}>
                    you won't find it cheaper anywhere
                </span>
            </div>
        );
    };

    const CartItems = () => {
        return (
            <>
                {props.cartItemList.map((item) => {
                    return (
                        <div className={ITEMS_CLASSNAME}>
                            <div className={ITEMS_IMAGE_CLASSNAME}>
                                <img
                                    className={IMAGE_CLASSNAME}
                                    src={item.imageURL}
                                    alt={item.name}
                                />
                            </div>
                            <div className={ITEMS_HEADER_CLASSNAME}>
                                {item.name}
                            </div>
                            <div className={ITEMS_BUTTON_CLASSNAME}>
                                <PlusMinusButtonComponent
                                    initialCount={item.unit}
                                    onPlusClick={() =>
                                        addProductToCart(item.id)
                                    }
                                    onMinusClick={() =>
                                        removeProductFromCart(item.id)
                                    }
                                />
                                <span>x</span>
                                {`Rs.${item.price}`}
                            </div>
                            <div className={ITEMS_TOTAL_CLASSNAME}>{`Rs.${
                                item.price * item.unit
                            }`}</div>
                        </div>
                    );
                })}
                {CartPageTagSection()}
            </>
        );
    };

    const CartEmpty = () => {
        return (
            <div className={CART_EMPTY_CLASSNAME}>
                <p className={CART_EMPTY_HEADER_CLASSNAME}>
                    No items in your cart
                </p>
                <p className={CART_EMPTY_SUB_HEADER_CLASSNAME}>
                    Your favourite items are just a click away
                </p>
            </div>
        );
    };

    const isCartEmpty: boolean = props.cartItemList.length !== 0;

    return (
        <div className={BASE_CLASSNAME}>
            <h1 className={CART_PAGE_HEADER_CLASSNAME}>
                My Cart
                <span
                    className={HEADER_ITEM_COUNT_CLASSNAME}
                >{`(${props.cartValue} items)`}</span>
            </h1>
            <div className={CART_PAGE_ITEMS_CLASSNAME}>
                {isCartEmpty ? CartItems() : CartEmpty()}
            </div>
            <div className={CART_PAGE_CHECKOUT_CLASSNAME}>
                <p className={CHECKOUT_MESSAGE_CLASSNAME}>
                    Promo Code can be applied on payment page
                </p>
                <LinkButtonComponent
                    id="checkout"
                    to={
                        isCartEmpty
                            ? ROUTE_URL.CART_PAGE
                            : ROUTE_URL.PRODUCT_PAGE
                    }
                    buttonName={
                        isCartEmpty
                            ? `Proceed To checkout Rs.${props.totalCartPrice} >`
                            : "Start Shopping"
                    }
                    externalClassName={CHECKOUT_BUTTON_CLASSNAME}
                />
            </div>
        </div>
    );
};

function mapStateToProps(state: IState): IStoreProps {
    return {
        cartItemList: state.appState.cartItemList,
        cartValue: getCartItemCount(state.appState),
        totalCartPrice: getTotalCartPrice(state.appState),
    };
}

export default connect<IStoreProps, {}, {}, IState>(mapStateToProps)(
    CartPageComponent
);
