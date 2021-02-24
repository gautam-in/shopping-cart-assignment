import C from '../../config/constant'

const buynow = (value) => {
    return {
        type: C.BUY_NOW,
        payload: { ...value, count: 1 }
    }
}

export default buynow;