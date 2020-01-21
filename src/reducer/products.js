import { PRODUCT_ACTIONS } from '../actions'
import { products as data } from '../data'

const d_products = data.map(x => ({ inCart: false, name: x.name, image: x.image, id: x.id, price: x.price, productCount: 0 }))

console.log(d_products)

const initialState = {
    products: d_products,
    openModal: false,
    modalProduct: null

}



export default function products(state = initialState, action) {

    switch (action.type) {

        case PRODUCT_ACTIONS.OPEN_PRODUCT_MODAL: {

            return {
                products: state.products,
                openModal: true,
                modalProduct: action.payload
            }
        }
        case PRODUCT_ACTIONS.CLOSE_PRODUCT_MODAL: {

            return {
                products: state.products,
                openModal: !state.openModal,
                modalProduct: null
            }
        }

        case PRODUCT_ACTIONS.TOGGLE_IN_CART: {
            const del_product = action.payload

            const index = state.products.map(x => x.id).indexOf(del_product.id)
            del_product.inCart = !del_product.inCart
            console.log(del_product)
            const products = state.products.slice();

            products.splice(index, 1, del_product)
            console.log(products)

            return {
                ...state,
                products: products
            }
        }

        case PRODUCT_ACTIONS.GET_PRODUCTS: {
            return state
        }

        case PRODUCT_ACTIONS.GET_PRODUCTS_SORTED: {
            const products = [...state.products];
            const sortBy = action.payload
            // console.log(sortBy)
            products.sort(compare[sortBy])
            return products
        }

        default:
            return state
    }
}


const compare = {
    lowestprice: (a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
    },
    highestprice: (a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
    }
};