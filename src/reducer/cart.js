
import { CART_ACTIONS } from '../actions'

const initialState = {
    cartProducts: [],
    total: 0,
    inCartProductCount: 0



}

export default function cart(state = initialState, action) {
    switch (action.type) {

        case CART_ACTIONS.ADD_TO_CART:
            {
                const product = action.payload

                if (state.cartProducts.indexOf(product.id) < 0) {
                    product.quantity = 1

                    return {
                        cartProducts: [...state.cartProducts, product],
                        total: state.total + product.price,
                        inCartProductCount: state.inCartProductCount + product.quantity

                    }
                }
                return {
                    cartProducts: [...state.cartProducts],
                    total: state.total,


                }



            }
        case CART_ACTIONS.QUANTITY_INCREMENT_CHANGE: {
            const sel_product = action.payload


            const products = state.cartProducts.slice()

            products.map(product => {
                if (product.id == sel_product.id) {
                    product.quantity += 1;

                }

            })

            return {
                cartProducts: state.cartProducts,
                total: state.total + sel_product.price,
                inCartProductCount: state.inCartProductCount + 1

            }
        }
        case CART_ACTIONS.QUANTITY_DECREMENT_CHANGE: {

            const sel_product = action.payload
            const products = state.cartProducts.slice()

            products.map(product => {
                if (product.id == sel_product.id) {
                    product.quantity -= 1;

                }

            })

            return {
                cartProducts: state.cartProducts,
                total: state.total - sel_product.price,
                inCartProductCount: state.inCartProductCount - 1

            }
        }
        case CART_ACTIONS.DELETE_FROM_CART: {

            let product = state.cartProducts.find(product => product.id === action.payload.id)

            let total = state.total - product.quantity * product.price;
            if (product) {

                return {
                    cartProducts: [...state.cartProducts.filter(p => p.id != product.id)],
                    total: total,
                    inCartProductCount: state.inCartProductCount - product.quantity
                }
            }
            return state
        }
        default:
            return state
    }
}