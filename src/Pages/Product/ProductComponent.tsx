import { connect } from "react-redux";

import "./ProductComponent.scss";
import { IState } from "../../Store/Store";
import { IProduct } from "../../Interfaces/IProduct";
import { AccordionComponent } from "../../BaseComponent/Accordion/AccordionComponent";
import { ICategories } from "../../Interfaces/ICategories";
import { DataGridComponent } from "../../BaseComponent/DataGrid/DataGridComponent";
import { getProductListByCategorieId } from "../../Store/Selectors";
import classNames from "classnames";

interface IStoreProps {
    productList: Array<IProduct>;
    categoriesList: Array<ICategories>;
    selectedCategorieId: string | null;
}

type TProductComponentProps = IStoreProps;

const ProductComponent: React.FC<TProductComponentProps> = (
    props: TProductComponentProps
) => {
    const BASE_CLASSNAME: string = "product";
    const ACCORDION_CLASSNAME: string = `${BASE_CLASSNAME}_accordion`;
    const DATAGRID_CLASSNAME: string = classNames({ 
        "product_data-grid": true,
        "product_data-grid--show": window.screen.width < 530 && props.selectedCategorieId !== null
    }); // `${BASE_CLASSNAME}_data-grid`;
      
    return (
        <div className={BASE_CLASSNAME}>
            <AccordionComponent
                externalClassName={ACCORDION_CLASSNAME}
                categoriesList={props.categoriesList}
                selectedCategorieID={props.selectedCategorieId}
            />
            <DataGridComponent
                externalClassName={DATAGRID_CLASSNAME}
                productList={props.productList}
            />
        </div>
    );
};

function mapStateToProps(state: IState): IStoreProps {
    return {
        productList: getProductListByCategorieId(state.appState),
        categoriesList: state.appState.catergoriesList,
        selectedCategorieId: state.appState.selectedCategorieID,
    };
}

export default connect<IStoreProps, {}, {}, IState>(mapStateToProps)(
    ProductComponent
);
