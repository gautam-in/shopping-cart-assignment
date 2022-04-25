import Axios from "axios";

export const categoryList = () => async (dispatch) => {
    const { data } = await Axios.get("http://localhost:5000/categories");
    let sortedDataByOrder = [];
    if (data) {
        sortedDataByOrder = data
            .sort((a, b) => a.order - b.order)
            .filter((cate) => cate.order > 0);
    }
    dispatch({
        type: 'FETCH_CATEGORIES',
        payload: sortedDataByOrder
    })
}


