export const addToCart = payload => ({
    type: 'ADD_TO_CART',
    payload
})

export const removeFromCart = payload => ({
    type: 'REMOVE_FROM_CART',
    payload
})

export const openToast = () => ({
    type: 'OPEN_TOAST',
})

export const closeToast = () => ({
    type: 'CLOSE_TOAST',
})