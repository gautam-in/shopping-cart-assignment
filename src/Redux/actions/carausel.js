import { actions } from '../actionTypes/actionConstants';
import { api } from '../../Helpers/axiosInstance';

export const fetchCarauselItems = () => {
    return async (dispatch) => {
        try {
            const result = await api.get('/banners');
            result && dispatch({
                type: actions.FETCH_CARAUSEL_ITEMS,
                payload: result.data,
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}