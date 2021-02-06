const buynow = (value) => {
    return {
        type: 'BUY_NOW',
        payload: { ...value, count: 1 }
    }
}

export default buynow;