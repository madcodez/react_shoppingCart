import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartTable from '../component/CartTable'
export class Cart extends Component {

    UNSAFE_componentWillReceiveProps(nextProps){
        if(this.props.cart.cartProducts.length != nextProps.cart.cartProducts.length){
            this.setState({cart : nextProps.cart})
        }
    }

    render() {
       
        const {cart} = this.props
        return (
            <div>
                <CartTable cart ={cart}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cart : state.cart
 })

export default connect(mapStateToProps)(Cart)
