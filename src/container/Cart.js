import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartTable from '../component/CartTable'
export class Cart extends Component {



    render() {

        const { cart } = this.props
        return (
            <div>
                <CartTable cart={cart} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Cart)
