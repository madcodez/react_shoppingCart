

export const GET_PRODUCTS = "GET_PRODUCTS"
export const TOGGLE_IN_CART = "TOGGLE_IN_CART"
export const GET_PRODUCTS_SORTED = "GET_PRODUCTS_SORTED"
export const OPEN_PRODUCT_MODAL = "OPEN_PRODUCT_MODAL"
export const CLOSE_PRODUCT_MODAL = "CLOSE_PRODUCT_MODAL"


export function openProductModalAction(product) {
  return {
    type: OPEN_PRODUCT_MODAL,
    payload: product
  }
}
export function closeProductModalAction() {
  return {
    type: CLOSE_PRODUCT_MODAL

  }
}
export function getProducts() {
  return {
    type: GET_PRODUCTS,

  }
}

export function getProductsSorted(sortBy) {

  return {
    type: GET_PRODUCTS_SORTED,
    payload: sortBy

  }
}
export function toggleInCart(product) {
  return {
    type: TOGGLE_IN_CART,
    payload: product

  }
}
