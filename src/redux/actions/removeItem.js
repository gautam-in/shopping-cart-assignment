import C from '../../config/constant'

const removeItem = (data) => {
    return {
        type: C.REMOVE_ITEM,
        payload: data
    }
}

export default removeItem