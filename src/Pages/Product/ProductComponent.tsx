import { connect } from "react-redux";
import { useEffect } from "react";

import "./ProductComponent.scss";
import { loadProduct } from "../../Model/Model";
import { IState } from "../../Store/Store";
import { IProduct } from "../../Interfaces/IProduct";
import { AccordionComponent } from "../../BaseComponent/Accordion/AccordionComponent";
import { ICategories } from "../../Interfaces/ICategories";
import { DataGridComponent } from "../../BaseComponent/DataGrid/DataGridComponent";
import { getProductListByCategorieId } from "../../Store/Selectors";

interface IStoreProps {
    productList: Array<IProduct>;
    categoriesList: Array<ICategories>;
}

type TProductComponentProps = IStoreProps;

const ProductComponent: React.FC<TProductComponentProps> = (
    props: TProductComponentProps
) => {
    const BASE_CLASSNAME: string = "product";
    return (
        <div className={BASE_CLASSNAME}>
            <AccordionComponent categoriesList={props.categoriesList} />
            <DataGridComponent productList={props.productList} />
        </div>
    );
};

function mapStateToProps(state: IState): IStoreProps {
    return {
        productList: getProductListByCategorieId(state.appState),
        categoriesList: state.appState.catergoriesList,
    };
}

export default connect<IStoreProps, {}, {}, IState>(mapStateToProps)(
    ProductComponent
);
