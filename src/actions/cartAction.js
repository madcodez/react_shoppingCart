export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export function addToCart(product) {
   // console.log(product)
    return  {
        type : ADD_TO_CART,

        payload : product
    }
}
export function deleteFromCart(product) {
    // console.log(product)
     return  {
         type : DELETE_FROM_CART,
 
         payload : product
     }
 }
