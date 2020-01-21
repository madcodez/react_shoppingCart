import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import auth from './auth'

const rootReducer = combineReducers({
  products,
  cart,
  auth

})

export default rootReducer