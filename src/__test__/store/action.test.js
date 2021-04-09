import * as actions from '../../store/action/action'
import * as types from '../../store/action/actionTypes'

describe('actions', () => {
  it('should create an action to update cart', () => {
    const payload = null
    const expectedAction = {
      type: types.UPDATE_CART_ITEM,
      payload:payload
    }
    expect(actions.updateCart(payload)).toEqual(expectedAction)
  })

  it('should create an action to remove item from cart', () => {
    const payload = null
    const expectedAction = {
      type: types.REMOVE_CART_ITEM,
      payload:payload
    }
    expect(actions.removeCart(payload)).toEqual(expectedAction)
  })

  it('should create an action to set filter', () => {
    const payload = null
    const expectedAction = {
      type: types.SET_FILTER,
      payload:payload
    }
    expect(actions.setFilter(payload)).toEqual(expectedAction)
  })
})

