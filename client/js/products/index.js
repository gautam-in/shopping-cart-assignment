const { $POST } = require('../../../api')
const debouce = require('../../../utils/debouce')

require('../common')
require('../../views/pages/products/index.hbs')
require('./index.scss')

//update Quantity Of Product
const updateCount = (val, ope) =>
    ope === 'add' ? Number(val) + 1 : Number(val) - 1
const updateButtonStatus = (btn, disable = true) => {
    if (disable) {
        btn.setAttribute('disabled', 'true')
    } else {
        btn.removeAttribute('disabled')
    }
}
const callCartApi = async (id, qty) => {
    try {
        const res = await $POST('add-to-cart', {
            id,
            qty,
        })
    } catch (err) {
        throw new Error(err)
    }
}
const debouncedApi = debouce(callCartApi, 1000)
const updateQty = (ele, ope) => {
    let inputEle = ele.parentElement.querySelector('input')
    let isDisabled = ele.getAttribute('disabled')
    const updatedCount = updateCount(inputEle.value, ope)
    inputEle.value = updatedCount
    debouncedApi(ele.getAttribute('data-id'), String(updatedCount))
    if (ope === 'add') {
        updatedCount >= 10 && !isDisabled && updateButtonStatus(ele)
    }
    if (ope === 'sub') {
        if (updatedCount < 1) {
            ele.closest('div').classList.add('is-hidden')
            ele.closest('div').previousElementSibling.classList.remove(
                'is-hidden'
            )
        }
        updateButtonStatus(ele.parentElement.querySelector('.qtyplus'), false)
    }
}
const onUpdateQtyBtnClick = async (e) => {
    const ele = e.target

    if (ele.classList.contains('buy-button')) {
        ele.classList.add('is-hidden')
        ele.setAttribute('aria-hidden', 'true')
        ele.nextElementSibling.classList.remove('is-hidden')
        ele.nextElementSibling.setAttribute('aria-hidden', 'false')
        ele.nextElementSibling.querySelector('input').value = 1
        callCartApi(ele.getAttribute('data-id'), '1')
        // common.cartItems.push({
        //     [ele.getAttribute('id')]: '1',
        // })
    } else {
        if (
            e.target.classList.contains('qtyplus') ||
            e.target.classList.contains('qtyminus')
        ) {
            updateQty(
                e.target,
                e.target.classList.contains('qtyplus') ? 'add' : 'sub'
            )
        }
    }
}
const onQtyInputKeyPress = (e) => {
    const updatedVal = parseInt(e.target.value + e.key)
    if (updatedVal > 10 || updatedVal < 1 || e.key === '-') {
        e.preventDefault()
        e.target.value = 1
    }
    callCartApi(ele.getAttribute('data-id'), updatedVal < 1 ? '1' : updatedVal)
    return updatedVal < 1 ? 1 : updatedVal
}

window.productMethods = {
    onQtyBtnClick: function (e) {
        onUpdateQtyBtnClick(e)
    },
    onQtyKeyDown: function (e) {
        onQtyInputKeyPress(e)
    },
}
