import { CompareArrowsOutlined } from '@material-ui/icons';
import C from '../../config/constant';

const initialState = {
    count: 0,
    details: []
}


const buynow = (state = initialState, action) => {
    let data = [...state.details];
    let duplicateItems = []
    let totalAmt = 0
    let index = 0;
    let count = state.count;
    switch (action.type) {
        case C.BUY_NOW:
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === action.payload.id) {
                    data[i].count = data[i].count + 1
                    duplicateItems.push(data[i])
                }
            }
            if (!duplicateItems.length) {
                data.push(action.payload)
            }
            data.forEach(val => {
                val.totalPrice = parseInt(val.price) * val.count
            })
            data.forEach(item => totalAmt = totalAmt + item.totalPrice)
            return {
                ...state,
                count: count + 1,
                details: data,
                totalAmt
            }
        case C.ADD_ITEM:
            data.forEach((item, i) => {
                if (data[i].id === action.payload.id) {
                    data[i].count = data[i].count + 1
                    data[i].totalPrice = data[i].count * data[i].price
                }
            })
            data.forEach(item => {
                totalAmt = totalAmt + item.totalPrice
            }
            )

            return {
                ...state,
                count: count + 1,
                details: data,
                totalAmt
            }
        case C.REMOVE_ITEM:
            if (count >1) {
                data.forEach((item, i) => {
                    if (item.id === action.payload.id) {
                        if (item.count > 1) {
                            item.count = item.count - 1
                            item.totalPrice = item.count * item.price
                        } else if(item.count===1){
                        data.splice(i,1);
                        }
                    }
                })
                data.forEach(item => {
                    totalAmt = totalAmt + item.totalPrice
                })
                return {
                    ...state,
                    count: count - 1,
                    details: data,
                    totalAmt
                }
            }
            return {
                ...state,
                count: count - 1,
                details: [],
                totalAmt
            }

        default:
            return {
                ...state
            }
    }
}

export default buynow;