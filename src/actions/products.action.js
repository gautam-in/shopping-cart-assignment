import Axios from 'axios';

export const productList = () => async(dispatch) => {
    const {data} = await Axios.get(`http://localhost:5000/products`)

    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: data
    })
}