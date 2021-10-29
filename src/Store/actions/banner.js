import { api } from "../../Library/axiosWrapper";
import { actions } from "../actionTypes/constants";

export const fetchBanners = () => {
    return async (dispatch) => {
        try{
            const res = await api.get('/banners');
            res && dispatch({
                type: actions.FETCH_BANNERS,
                payload: res.data
            })
        } catch(error){
            console.error(error);
        }
    }
}