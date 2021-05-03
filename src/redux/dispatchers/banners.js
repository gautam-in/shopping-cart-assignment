import { getBanners } from '../../services/Api';
import { fetchBannersDataRequest, fetchBannersDataSuccess, fetchBannersDataFailure } from '../actions/bannersAction';

export const getBanners = () => (dispatch)=>{
    dispatch(fetchBannersDataRequest());
    getBanners().then((banners) =>
        dispatch(fetchBannersDataSuccess(banners))
        ).catch(() =>
            dispatch(fetchBannersDataFailure())
        );
}