import 'core-js'
import 'regenerator-runtime/runtime'
import { productTotal, updateCartTotal } from '../../utils/cartCalculation'
require('../css/style.scss')
const { $POST } = require('../../api')
const debouce = require('../../utils/debouce')

export const callCartApi = async (id, qty) => {
    try {
        const res = await $POST('add-to-cart', {
            id,
            qty,
        })
        if (res?.template) {
            console.log(res)
            document.querySelector('.cart-items-list').innerHTML += res.template;
            updateCartCalculation(id, 1, true)

        }
    } catch (err) {
        throw new Error(err)
    }
}
const debouncedApi = debouce(callCartApi, 1000)

const toggleEmptyCartMsg = (isVisible) => {
    const msgEle = document.getElementById('no-items-cart-msg')
    if (isVisible) {
        msgEle.classList.remove('is-hidden')
        msgEle.nextElementSibling.classList.add('is-hidden')
    } else {
        msgEle.classList.add('is-hidden')
        msgEle.nextElementSibling.classList.remove('is-hidden')
    }
}

//update Quantity Of Product

const updateCartItemsCount = (ele, val) => {
    const itemCount = Number(ele.textContent)
    if (itemCount > 0 && itemCount + val == 0) toggleEmptyCartMsg(true)
    if (itemCount == 0 && itemCount + val > 0) toggleEmptyCartMsg(false)
    ele.innerHTML = itemCount + val
}
export const onRemoveItemFromCart = (ele, prodId) => {
    updateCartItemsCount(document.getElementById('total-cart-items'), -1)
    ele.classList.add('is-hidden')
    if (!ele.classList.contains('mini-cart__item')) {
        ele.previousElementSibling.classList.remove('is-hidden')
        const miniCartItem = document.querySelector(
            ".mini-cart__item[data-id='" + prodId + "']"
        )
        miniCartItem.remove()
    }else{
        const buyBtn = document.querySelector(
            ".buy-button[data-id='" + prodId + "']"
        )
        buyBtn.classList.remove("is-hidden");
        buyBtn.nextElementSibling.classList.add("is-hidden");
    }
}
export const updateCount = (val, ope) =>
    ope === 'sub' ? Number(val) - 1 : Number(val) + 1
export const updateButtonStatus = (btn, disable = true) => {
    if (disable) {
        btn.setAttribute('disabled', 'true')
    } else {
        btn.removeAttribute('disabled')
    }
}

const updateCartCalculation = (id, qty, isNew=false) => {
    const grandTotalEle = document.getElementById('cart-grand-total')
    const grandTotal = grandTotalEle.textContent
    const productTotalEle = document.querySelector(
        "[data-cart-total='" + id + "']"
    )
    console.log(productTotalEle);
    if (productTotalEle) {
        const price = productTotalEle.getAttribute('data-price')
        grandTotalEle.innerHTML = updateCartTotal(
            qty,
            price,
            isNew ? 0 :productTotalEle.textContent,
            grandTotal
        )
        productTotalEle.innerHTML = productTotal(qty, price)
    }
}
const updateQty = (ele, ope) => {
    let inputEle = ele.parentElement.querySelector('.qty-input')
    let isDisabled = ele.getAttribute('disabled')
    let prodId = ele.getAttribute('data-id')
    const updatedCount = updateCount(
        inputEle.value ?? inputEle.textContent,
        ope
    )
    if (inputEle.getAttribute('value')) {
        inputEle.value = updatedCount
        const miniCartLabel = document.querySelector(
            "label[data-id='" + prodId + "']"
        )
        if (miniCartLabel) miniCartLabel.innerHTML = updatedCount
    } else {
        inputEle.innerHTML = updatedCount
        const inputQty = document.querySelector(
            "input[data-id='" + ele.getAttribute('data-id') + "']"
        )
        if (inputQty) inputQty.value = updatedCount
    }
    debouncedApi(prodId, String(updatedCount))
    if (ope === 'add') {
        updatedCount >= 10 && !isDisabled && updateButtonStatus(ele)
    }
    if (ope === 'sub') {
        if (updatedCount < 1) {
            onRemoveItemFromCart(ele.closest('.cart-item'), prodId)
        }
        updateButtonStatus(ele.parentElement.querySelector('.qtyplus'), false)
    }
    updateCartCalculation(prodId, updatedCount)
}
export const onUpdateQtyBtnClick = async (e) => {
    const ele = e.target

    if (ele.classList.contains('buy-button')) {
        ele.classList.add('is-hidden')
        ele.setAttribute('aria-hidden', 'true')
        ele.nextElementSibling.classList.remove('is-hidden')
        ele.nextElementSibling.setAttribute('aria-hidden', 'false')
        ele.nextElementSibling.querySelector('input').value = 1
        updateCartItemsCount(document.getElementById('total-cart-items'), 1)
        callCartApi(ele.getAttribute('data-id'), '1')
    } else {
        if (
            ele.classList.contains('qtyplus') ||
            ele.classList.contains('qtyminus')
        ) {
            updateQty(ele, ele.classList.contains('qtyplus') ? 'add' : 'sub')
        }
    }
}

const updateMiniCart = (e) => {
    onUpdateQtyBtnClick(e)
}
const toggleMiniCart = (visible) => {
    const cartEle = document.getElementById('mini-cart')
    if (visible) {
        cartEle.classList.remove('is-hidden')
        cartEle.setAttribute('tabindex', '0')
        cartEle.setAttribute('aria-expanded', 'true')
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    } else {
        cartEle.classList.add('is-hidden')
        cartEle.setAttribute('tab-index', '-`')
        cartEle.setAttribute('aria-expanded', 'false')
        document.getElementsByTagName('html')[0].style.overflow = 'auto'
    }
}
window.miniCart = {
    updateMiniCart,
    toggleMiniCart,
}
