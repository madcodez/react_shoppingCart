import React, { Component } from 'react'
import Product from '../component/Product'
import Sort from '../component/Sort'
import { connect } from 'react-redux'
import ProductModal from '../component/ProductModal'





class Products extends Component {
    constructor(props) {
        super(props)


    }



    render() {

        const { products, openModal, modalProduct } = this.props

        return (
            <div>


                <div style={divStyle}>
                    <div style={{ width: "100%", marginBottom: "10px" }}>
                        {/* <Sort style={{}} /> */}
                    </div>
                    {products.map(product => <Product key={product.id} product={product} openModal={openModal} />)}
                </div>
                {openModal ? <ProductModal open={openModal} product={modalProduct} /> : <div></div>}
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products.products,
    openModal: state.products.openModal,
    modalProduct: state.products.modalProduct,

})
//Todo : with styles
const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: "85%",
    minHeight: '600px'
};

export default connect(mapStateToProps)(Products)
