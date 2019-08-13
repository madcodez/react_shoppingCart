
import {CART_ACTIONS} from '../actions'

const initialState ={
    cartProducts : [],
    total : 0
}

export default function cart(state = initialState, action) {
    switch (action.type) {
      case  CART_ACTIONS.ADD_TO_CART :
        { 
             const product = action.payload
             
           
             let cartproduct = state.cartProducts.find(product => product.name === action.payload.name)
             
             if(cartproduct){
                cartproduct.cartQuantity += product.quantity
                console.log(cartproduct)
                return {
                    cartProducts : [...state.cartProducts.filter(p => p.id != product.id),cartproduct],
                    total :  state.total + action.payload.price
                }
             }else{
                product.cartQuantity = 1
                return {
                    cartProducts : [...state.cartProducts , product],
                    total : state.total + action.payload.price
                }
             }


           
        }
        case  CART_ACTIONS.DELETE_FROM_CART : {
            
            let product = state.cartProducts.find(product => product.name === action.payload.name)
            let total = state.total - product.cartQuantity * product.price ;
            if(product){

                 return {
                     cartProducts : [...state.cartProducts.filter(p => p.id != product.id)],
                     total : total
                    }
            }
            return state
        }
      default:
        return state
    }
  }