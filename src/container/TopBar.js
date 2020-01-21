import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../component/NavBar'
export class TopBar extends Component {

    render() {

        const { cart } = this.props
        return (
            <div>
                <NavBar cart={cart} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(TopBar)