import { connect } from "react-redux";
import { useEffect } from "react";

import "./HomeComponent.scss";
import { BannerComponent } from "../../BaseComponent/Banner/BannerComponent";
import IBanners from "../../Interfaces/IBanners";
import { IState } from "../../Store/Store";
import { ZigZagLayoutComponent } from "../../BaseComponent/ZigZagLayout/ZigZagLayoutComponent";
import { ICategories } from "../../Interfaces/ICategories";

interface IStoreProps {
    bannerList: Array<IBanners>;
    categoriesList: Array<ICategories>;
}

type THomeComponentProps = IStoreProps;

const HomeComponent: React.FC<THomeComponentProps> = (
    props: THomeComponentProps
) => {
    const BASE_CLASSNAME: string = "home";

    return (
        <div className={BASE_CLASSNAME}>
            <BannerComponent bannerList={props.bannerList} />
            <ZigZagLayoutComponent categoriesList={props.categoriesList} />
        </div>
    );
};

function mapStateToProps(state: IState): IStoreProps {
    return {
        bannerList: state.appState.bannerList,
        categoriesList: state.appState.catergoriesList,
    };
}

export default connect<IStoreProps, {}, {}, IState>(mapStateToProps)(
    HomeComponent
);
