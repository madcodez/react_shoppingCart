

export const GET_PRODUCTS = "GET_PRODUCTS"

export const GET_PRODUCTS_SORTED ="GET_PRODUCTS_SORTED"
export function getProducts() {
    return {
      type: GET_PRODUCTS,
      
    }
  }

  export function getProductsSorted(sortBy) {
    console.log(sortBy)
    return {
      type: GET_PRODUCTS_SORTED,
      payload : sortBy
      
    }
  }

