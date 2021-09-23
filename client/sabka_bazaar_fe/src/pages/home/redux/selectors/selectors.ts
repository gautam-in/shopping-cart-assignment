import { BannerList, CategoryList } from "models/home";
import { createSelector, Selector } from "reselect";
import { IState } from "store/interfaces";
import { IHomeError, IHomeLoading, IHomeState } from "../reducers/reducer";

const homeSelect = (state: IState): IHomeState => state.home;

const selectBanners: Selector<IState, BannerList> = createSelector(homeSelect, (home) => home.getBannersData);

const selectCategories: Selector<IState, CategoryList> = createSelector(homeSelect, (home) => home.getCategoriesData);

const selectLoading: Selector<IState, IHomeLoading> = createSelector(homeSelect, (home) => home.loading);

const selectError: Selector<IState, IHomeError> = createSelector(homeSelect, (home) => home.error);

export const HomeSelectors = { selectBanners, selectCategories, selectLoading, selectError };
