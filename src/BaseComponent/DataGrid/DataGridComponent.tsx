import { IProduct } from "../../Interfaces/IProduct";
import { addProductToCart } from "../../Model/Model";
import { ROUTE_URL } from "../../Utility/RouteUrlConstant";
import { LinkButtonComponent } from "../LinkButton/LinkButtonComponent";
import "./DataGridComponent.scss";

interface IDataGridComponent {
    productList: Array<IProduct>;
    externalClassName?: string;
}

export const DataGridComponent: React.FC<IDataGridComponent> = (
    props: IDataGridComponent
) => {
    const BASE_CLASSNAME: string = "data-grid";
    const GRID_ITEM_CLASSNAME: string = `${BASE_CLASSNAME}_item`;
    const GRID_ITEM_HEADER_CLASSNAME: string = `${GRID_ITEM_CLASSNAME}_header`;
    const GRID_ITEM_IMAGE_CLASSNAME: string = `${GRID_ITEM_CLASSNAME}_image`;
    const GRID_ITEM_DESCRIPTION_CLASSNAME: string = `${GRID_ITEM_CLASSNAME}_description`;
    const GRID_ITEM_PRICE_CLASSNAME: string = `${GRID_ITEM_CLASSNAME}_price`;
    const GRID_ITEM_BUTTON_CLASSNAME: string = `${GRID_ITEM_CLASSNAME}_button`;
    const BUTTON_PRICE_TAG_CLASSNAME: string = `${GRID_ITEM_BUTTON_CLASSNAME}_price-tag`;
    const BUTTON_PRICE_CLASSNAME: string = `${BUTTON_PRICE_TAG_CLASSNAME}_price`;
    return (
        <div className={`${BASE_CLASSNAME} ${props.externalClassName}`}>
            {props.productList.map((product) => {
                return (
                    <div
                        id={`item_${product.id}`}
                        className={GRID_ITEM_CLASSNAME}
                        key={product.id}
                    >
                        <h3 className={GRID_ITEM_HEADER_CLASSNAME}>
                            {product.name}
                        </h3>
                        <img
                            className={GRID_ITEM_IMAGE_CLASSNAME}
                            src={product.imageURL}
                            alt={product.name}
                        />
                        <p className={GRID_ITEM_DESCRIPTION_CLASSNAME}>
                            {product.description}
                        </p>

                        <p
                            className={GRID_ITEM_PRICE_CLASSNAME}
                        >{`MRP Rs.${product.price}`}</p>
                        <LinkButtonComponent
                            externalClassName={GRID_ITEM_BUTTON_CLASSNAME}
                            id={`btn_${product.id}`}
                            to={ROUTE_URL.CART_PAGE}
                            buttonName={
                                <p className={BUTTON_PRICE_TAG_CLASSNAME}>
                                    <span>Buy Now</span>
                                    <span className={BUTTON_PRICE_CLASSNAME} >{`@ MRP Rs.${product.price}`}</span>
                                </p>
                            } //buttonName={"Buy Now"} //#todo myResponsiveChanges
                            onClick={() => addProductToCart(product.id)}
                        />
                    </div>
                );
            })}
        </div>
    );
};
