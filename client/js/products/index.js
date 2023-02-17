const { callCartApi,onUpdateQtyBtnClick, onRemoveItemFromCart } = require('../common')
require('../../views/pages/products/index.hbs')
require('./index.scss')

const onQtyInputBlur = (e) => {
    const val = e.target.value;
    !!val && onRemoveItemFromCart(e.target.closest('div'));
    callCartApi(e.target.getAttribute('data-id'), val);
}

const onQtyInputKeyPress = (e) => {
    const updatedVal = parseInt(e.target.value + e.key)
    if (updatedVal > 10 || updatedVal < 0 || e.key === '-' || updatedVal === "") {
        e.preventDefault()
        e.target.value = e.target.getAttribute('data-qty');
        return
    }
    return updatedVal < 0 ? 0 : updatedVal
}

window.productMethods = {
    onQtyBtnClick:  onUpdateQtyBtnClick,
    onQtyKeyDown: onQtyInputKeyPress,
    onQtyInputBlur
}