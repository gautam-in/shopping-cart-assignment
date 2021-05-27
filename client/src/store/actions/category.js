import { SET_ACTIVE_CATEGORY } from '../actionTypes';

export function setActiveCategory(payload) {
    return {
        type: SET_ACTIVE_CATEGORY,
        payload
    }
}