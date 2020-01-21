export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const QUANTITY_INCREMENT_CHANGE = "QUANTITY_INCREMENT_CHANGE"
export const QUANTITY_DECREMENT_CHANGE = "QUANTITY_DECREMENT_CHANGE"




export function addToCart(product) {
    // console.log(product)
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function quantityIncrementChange(product) {
    return {
        type: QUANTITY_INCREMENT_CHANGE,
        payload: product
    }
}

export function quantityDecrementChange(product) {
    return {
        type: QUANTITY_DECREMENT_CHANGE,
        payload: product
    }
}
export function deleteFromCart(product) {
    // console.log(product)
    return {
        type: DELETE_FROM_CART,
        payload: product
    }
}
