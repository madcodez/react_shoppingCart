import React from 'react';
import Products from './container/Products'
import Cart from './container/Cart'
import {PRODUCT_ACTIONS,CART_ACTIONS} from './actions'
import { connect } from 'react-redux'
import store from './reducer'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    const {dispatch} = this.props
  
     dispatch(PRODUCT_ACTIONS.getProducts())
 
     
  }
 //PRODUCTS_ACTIONS.getProducts()
 componentDidMount(){
  //console.log(this.props)
  //  this.setState({
  //    products : store.getState().products,
  //    cart : store.getState().cart
  //  })
 }



 render(){


  
  // const {products,cart} = this.state
   //console.log(cart)
  return (
    <div className="App" >
               <Products />
               <Cart style={{margin :"auto"}} />
               {/* <CartTable cart = {cart} /> */}
         
          
    </div>
  );
 }

}

export default connect()(App);
