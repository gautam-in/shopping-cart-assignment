module.exports = (fn, timeframe) => {
    let timeout
    return (...args) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fn(...args)
        }, timeframe)
    }
}
