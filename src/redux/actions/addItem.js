import C from '../../config/constant'

const addItem = (data) => {
    return {
        type: C.ADD_ITEM,
        payload: data
    }
}

export default addItem