export function createRequestActionTypes(base) {
    return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((requestTypes, type) => {
        requestTypes[type] = `${base}_${type}`
        return requestTypes
    }, {})
}

export function actionCreator(actionType, data) {
    return {
        type: actionType,
        payload: data
    }
}