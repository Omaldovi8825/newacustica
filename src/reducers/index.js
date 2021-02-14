const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((producto, index) => index !== action.payload)
            }

        case 'OPEN_TOAST':{
            return {
                ...state,
                toastOpen: true
            }
        }

        case 'CLOSE_TOAST':{
            return {
                ...state,
                toastOpen: false
            }
        }
        
        default:
            return state
    }
}

export default reducer